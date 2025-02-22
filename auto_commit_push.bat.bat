@echo off

:: Stage all changes
git add .

:: Commit changes with a message
git commit -m "Automated commit"

:: Check if commit was successful
IF %ERRORLEVEL% NEQ 0 (
    echo Commit failed, aborting.
    exit /b 1
)

:: Push changes to the master branch
git push origin master

:: Check if push was successful
IF %ERRORLEVEL% NEQ 0 (
    echo Push failed, aborting.
    exit /b 1
)

echo Commit and Push completed successfully.
