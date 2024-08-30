import { useForm } from "react-hook-form";
import { edadValidator } from "./Validators";


const Formulario = () => {

    const { register,formState: { errors }, handleSubmit } = useForm();

    const onSubmit =(data) => {
        console.log(data);
    }


    return <div className="container">
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre: </label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 50
                })} />
                {errors.nombre?.type === 'required' && <p> Este campo es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p> El campo nombre debe tener menos de 50 caracteres</p>}
            </div>
            <div>
                <label>Direccion: </label>
                <input type="text" {...register('direccion', {
                    required: true,
                    maxLength: 50
                })}/>
                {errors.direccion?.type === 'required' && <p> Este campo es requerido</p>}
                {errors.direccion?.type === 'maxLength' && <p> El campo nombre debe tener menos de 50 caracteres</p>}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div>
                <label>Edad: </label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })}/>
                {errors.edad && <p> La edad debe estar entre 1 y 100 años</p>}
            </div>
            <div>
                <label>Nacionalidad: </label>
                <select>
                    <option value="nu">Seleccione una nacionalidad</option>
                    <option value="co">Colombia</option>
                    <option value="eu">Estadounidense</option>
                    <option value="es">Española</option>
                    <option value="al">Alemana</option>
                    <option value="it">Italiana</option>
                </select>
            </div>
            <input type="submit" value="ENVIAR"></input>
            

        </form>
    </div>
}
export default Formulario;