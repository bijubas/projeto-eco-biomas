#!/usr/bin/env pwsh
# Run helper for the APS app (Windows PowerShell)
$project = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $project

if (-not (Test-Path ".venv")) {
    python -m venv .venv
}

# Activate the venv for this script
& "$PWD\.venv\Scripts\Activate.ps1"

# Install requirements
pip install -r requirements.txt

# Start the app in a new process
Start-Process -FilePath "$PWD\.venv\Scripts\python.exe" -ArgumentList "main.py"

# Give the server a moment to start, then open the browser
Start-Sleep -Seconds 1
Start-Process "http://127.0.0.1:5000/"