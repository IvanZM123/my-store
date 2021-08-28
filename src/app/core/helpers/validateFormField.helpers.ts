import { AbstractControl, FormGroup } from "@angular/forms";
import { rules } from "../config/rules.config";

export function getMsgFormFieldError(
    form: FormGroup,
    field: string,
    nameRegex: string = ""
) {
    const formControl: AbstractControl | null = form.get(field);

    if (formControl?.hasError("required")) {
      return "Este campo es requerido.";
    }

    if (formControl?.hasError("minlength")) {
      const { requiredLength, actualLength } = formControl.getError("minlength") as Record<string, string>;
      return `Usted lleva ${ actualLength } y debe contener al menos ${ requiredLength } caracteres.`
    }

    const expression = rules as any;
    return expression[nameRegex].msgError || "";
}
