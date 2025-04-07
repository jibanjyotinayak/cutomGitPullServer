# customGitpull
This node js script makesure your develop branch is upto date as per the time you configure.

# step-1
npm install -g pm2 or sudo npm install -g pm2
# step-2
pm2 start node gitPull.js 
# step-3 (Ensure the process restarts after reboot)
pm2 save 
pm2 startup
# step-4
Monitor logs and manage the process
pm2 logs git-auto-pull   # View logs
pm2 restart git-auto-pull # Restart the script
pm2 list                 # Check running processes

