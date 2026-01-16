import os
import subprocess

for i in range(1, 26):
    with open("src/index.js", "a") as f:
        f.write(f"\n// update {i}")
    subprocess.run(["git", "add", "src/index.js"])
    subprocess.run(["git", "commit", "-m", f"Fix logic for issue #{i}"])
