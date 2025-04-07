const simpleGit = require("simple-git");
const path = "/Users/jibanjyotinayak/Desktop/PROGRAMMING/LearnGit"; // Replace with actual repo path

const git = simpleGit(path);
async function pullDevelopBranch() {
  try {
    await git.checkout("main"); // Ensure we are on the 'develop' or 'main' branch
    await git.pull("origin", "main"); // Pull latest changes
    console.log(`✅ Pulled latest changes at ${new Date().toLocaleString()}`);
  } catch (error) {
    console.error("❌ Error pulling branch:", error);
  }
}
// Run every 10 minutes
setInterval(pullDevelopBranch, 10 * 60 * 1000); // 10 minutes in milliseconds
// Run immediately once
pullDevelopBranch();
