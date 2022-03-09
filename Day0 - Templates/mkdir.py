# Python Script used to create all the needed folders and copy the base template files. 
import os 
import shutil

file1 = r"./script.js"
file2 = r"./index.html"
file3 = r"./style.css"

count = 1
while count <= 50:
    isDir = os.path.isdir("./Day" + str(count))
    if isDir == False:
        os.mkdir('../Day' + str(count))
        isFile=os.path.isfile('../Day' + str(count) + '/script.js')
        isFile2=os.path.isfile('../Day' + str(count) + '/index.html')
        isFile3=os.path.isfile('../Day' + str(count) + '/style.css')
        if isFile == False:
            file1go = '../Day' + str(count) + '/script.js'
            shutil.copy(file1, file1go)
        if isFile2 == False:
            file2go = '../Day' + str(count) + '/index.html'
            shutil.copy(file2, file2go)
        if isFile3 == False:
            file3go = '../Day' + str(count) + '/style.css'
            shutil.copy(file3, file3go)
    else:
        print("Day" + str(count) + " already exists")
    count += 1