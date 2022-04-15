# Python Script used to create all the needed folders and copy the base template files. 
import os 

# Read the folders 
folder = '../../Udemy-FiftyShadesOfProjects'
subfolders = [name for name in os.listdir(folder) if os.path.isdir(os.path.join(folder, name))]

# Open needed file
file = open('projectdata.js', 'w')

# Create start of array
file.write(str("const Projects = [ \n"))

for subfolder in subfolders:

    if subfolder == '.git':
        pass
    elif subfolder == 'Day0 - Templates':
        pass
    elif '-' not in subfolder:
        pass
    else:
        stripped = subfolder.split('-', 1)[1].strip()
        file.write(str('{\n\tname: "' + stripped + '",\n\tdescription:"Description added later",\n\turl: "./'+subfolder+'/index.html"\n },\n'))

file.write(str("]"))
file.write(str("\n\nexport default Projects"))
