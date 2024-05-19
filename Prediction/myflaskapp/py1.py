import numpy as np
import os
from tensorflow.keras.preprocessing import image
from flask import Flask, render_template, request, flash, session
from keras.models import load_model
from werkzeug.utils import secure_filename


model1=load_model("C:/Users/sivabala pc/Desktop/Prediction/body1.h5")
print(model1.summary())
app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    if not session.get('logged_in'):
        return render_template('log.html')
    else:
        return render_template('index.html')

@app.route('/login', methods=['POST'])
def do_admin_login():
    if request.form['password'] == 'siva@123' and request.form['username'] == 'admin':
        session['logged_in'] = True
    else:
        flash('wrong password!')
    return index()

@app.route('/weather')
def weather():
    return render_template('weather.html')
@app.route('/prediction')
def prediction():
      
      
    return render_template('prediction.html')
@app.route('/eco')
def eco():
      return render_template('eco.html')

@app.route('/Endspecies')
def endspecies():
      return render_template('Endspecies.html')

@app.route('/ports')
def ports():
      return render_template('ports.html')

@app.route('/maps')
def maps():
      return render_template('maps.html')
@app.route('/fishing')
def fishing():
      return render_template('fishing.html')

@app.route('/result', methods=['POST'])
def result():
      print('Received POST request')
      if request.method == 'POST':
                print('Processing request')
                f = request.files['image']


                basepath = os.path.dirname(__file__)

                file_path =  os.path.join(basepath, 'uploads', secure_filename(f.filename))

                f.save(file_path)
                

                img = image.load_img(file_path, target_size=(224, 224))
                

                x = image.img_to_array(img)

                x = np.expand_dims(x, axis=0)
                print('Shape of input image:', x.shape)
                

                print(img)
                

                  
                prediction1 = np.argmax(model1.predict(x))
                

            #     index1=['Black Sea Sprat', 'blood_red_snapper','blotched_croaker' ,'cuttle_fish' ,'flower_prawn' ,'Gilt-Head Bream' ,'guitar_fish', 'hammer_head_shark', 'Hourse Mackerel', 'malabar_reef_cod' ,'mud_crab' ,'Red Mullet' ,'Red Sea Bream' ,'rock_lobster','sand_lobster','Sea Bass' ,'Shrimp','squid' ,'sting_ray' ,'Striped Red Mullet' ,'Trout','']
                index1 = ['','blood_red_snapper','cuttle_fish','flower_prawn','guitar_fish','hammer_head_shark','malabar_reef_cod','mud_crab','rock_lobster','sand_lobster','squid','sting_ray']
              
                res1 = index1[prediction1]
           
                result1=format(str(res1))
                if result1 == "Black Sea Sprat":
                      value = "Black Sea Sprat"  
                elif result1 == "blood_red_snapper":
                      value = "Blood red snapper"
                elif result1 == "blotched_croaker":
                      value = "blotched_croaker"
                      
                elif result1 == "cuttle_fish":
                      value = "Cuttle fish"
                elif result1 == "flower_prawn":
                      value = "Flower prawn"
                elif result1 == "Gilt-Head Bream":
                      value = "Gilt-Head Bream"
                
                elif result1 == "guitar_fish":
                      value = "Guitar fish"
                elif result1 == "hammer_head_shark":
                      value = "Hammer head shark" 
                elif result1 == "Hourse Mackerel":
                      value = "Hourse Mackerel" 
                elif result1 == "malabar_reef_cod":
                      value = "Malabar reef cod"
                elif result1 == "mud_crab":
                      value = "Mud crab"
                elif result1 == "Red Mullet":
                      value = "Red Mullet" 
                elif result1 == "Red Sea Bream":
                      value = "Red Sea Bream"   
                elif result1 == "rock_lobster":
                      value = "Rock lobster"
                elif result1 == "sand_lobster":
                      value = "Sand lobster"
                elif result1 == "Sea Bass":
                      value = "Sea Bass"
                elif result1 == "Shrimp":
                      value = "Shrimp"
                elif result1 == "squid":
                      value = "Squid"
                elif result1 == "sting_ray":
                      value = "Sting ray"
                elif result1 == "Striped Red Mullet":
                      value = "Striped Red Mullet"
                elif result1 == "Trout":
                      value = "Trout"             
                else:
                      value = "Not Found"   
                print('prediction:',value)
                
                return render_template('prediction.html',prediction=value)

   
      
if __name__ == '__main__':
    app.secret_key = os.urandom(12)
    app.run(debug=True)

