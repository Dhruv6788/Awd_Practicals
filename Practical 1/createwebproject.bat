@echo off
setlocal enabledelayedexpansion

REM Check if a project name is provided
if "%1"=="" (
    echo Usage: createwebproject ^<project_name^>
    exit /b 1
)

set "project_name=%1"

REM Create project directory and change to it
mkdir "%project_name%"
cd "%project_name%"

REM Create index.html
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo   ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>%project_name%^</title^>
echo     ^<link rel="stylesheet" href="style.css"^>
echo   ^</head^>
echo   ^<body^>
echo     ^<script src="main.js"^>^</script^>
echo   ^</body^>
echo ^</html^>^> index.html

REM Create style.css
echo /* Add your styles here */ > style.css

REM Create main.js
echo // Add your JavaScript code here > main.js

echo Web project '%project_name%' created successfully.
