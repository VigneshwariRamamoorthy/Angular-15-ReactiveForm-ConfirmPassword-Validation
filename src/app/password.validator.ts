import { AbstractControl } from "@angular/forms";

export function passWordValidator(passWord: any, confirmPwd: any) : any {
    return function(form: AbstractControl) {
    
        const password = form.get(passWord)?.value;
        const confirmPassword = form.get(confirmPwd)?.value;

        if(password!== confirmPassword) {
            return {misMatch:true}
        }
        else {
            return null
        }
    }
}