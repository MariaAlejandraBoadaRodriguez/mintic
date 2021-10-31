import React from 'react';
import styles from './productsdeletePage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';

const productsdeletePage = props => {
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <h5>Agregar</h5>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <h5>Actualizar</h5>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <h5>Eliminar</h5>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3>ELIMINAR PRODUCTO</h3>
                <div  className={styles.formulario}>
                    <table>
                        <tr>
                           <td>
                                <p>ID PRODUCTO</p>
                                <p><input type="text" name="valortotal"></input></p>
                                <p>DESCRIPCIÓN</p>
                                <p><input type="text" name="idproducto"></input></p>
                                <p>VALOR UNITARIO</p>
                                <p><input type="text" name="idproducto"></input></p>
                                <p>CANTIDAD</p>
                                <p><input type="number" name="idproducto"></input></p>
                                <p>ESTADO</p>
                                <select name="lista-rol">
                                    <option value="1">Seleccione el Estado</option>
                                    <option value="1">Disponible</option>
                                    <option value="2">Agotado</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button className={styles.boton}>Eliminar</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
    
export default productsdeletePage