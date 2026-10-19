// Wird vor dem ersten Rendern ausgeführt, damit Einstellungen nicht flackern
export const a11yInitScript = `try{var d=document.documentElement,f=localStorage.getItem('bbs-font'),c=localStorage.getItem('bbs-contrast');if(f&&f!=='base')d.dataset.font=f;if(c==='high')d.dataset.contrast='high';}catch(e){}`;
