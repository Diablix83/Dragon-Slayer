/*
 ██████╗ ██████╗ ██████╗ ███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║██║  ██║█████╗  
██║     ██║   ██║██║  ██║██╔══╝  
╚██████╗╚██████╔╝██████╔╝███████╗
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
*/

isUserLog();

/* Welcome */
connexionForm.addEventListener('submit', e => connexionUserTask(e));
inscriptionForm.addEventListener('submit', e => inscriptionUserTask(e));

connexionEmailInput.addEventListener('input', removeWarningOnChange);
connexionPasswordInput.addEventListener('input', removeWarningOnChange);

inscriptionEmailInput.addEventListener('input', removeWarningOnChange);
inscriptionPseudoInput.addEventListener('input', removeWarningOnChange);
inscriptionPasswordInput.addEventListener('input', removeWarningOnChangePassword);
inscriptionConfirmPasswordInput.addEventListener('input', removeWarningOnChangePassword);

/* Character List */

btnCreateCharacter.addEventListener('click', createCharacterDisplay);
btnDeconnexion.addEventListener('click', userUnlog);