# Python Script used to create all the needed folders and copy the base template files. 
import os 
import shutil

file1 = r"./script.js"
file2 = r"./index.html"
file3 = r"./style.css"

count = 1
while count <= 50:
    os.mkdir('Day' + str(count))
    file1go = 'Day' + str(count) + '/script.js'
    file2go = 'Day' + str(count) + '/index.html'
    file3go = 'Day' + str(count) + '/style.css'
    shutil.copy(file1, file1go)
    shutil.copy(file2, file2go)
    shutil.copy(file3, file3go)
    count += 1