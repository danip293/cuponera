import React from 'react';
import { renderField } from '../componets/RenderField';
import { Field, reduxForm } from 'redux-form';
import { Badge, Form, FormGroup, Label } from 'reactstrap';
import { validate, warn } from '../componets/Validations';
import { ImageComponent } from '../componets/ImageComponent';

class CouponFormComponent extends React.Component {
  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      discountPercenatage,
      readOnly,
    } = this.props;

    const greaterThan = otherField => (value, previousValue, allValues) =>
      parseFloat(value) > parseFloat(allValues[otherField])
        ? value
        : previousValue;

    return (
      <div>
        <Form onSubmit={handleSubmit} id="form1">
          {/*imagenes */}
          <FormGroup>
            <Field name="image" component={renderField} label="imagen" />
          </FormGroup>
          {/* nombre del cupon */}
          <FormGroup>
            <Field
              name="name"
              component={renderField}
              type="text"
              label="Nombre"
              disabled={readOnly}
            />
          </FormGroup>
          {/* descripcion del cupon */}
          <FormGroup>
            <Field
              name="description"
              component={renderField}
              type="text"
              label="Descripcion"
              disabled={readOnly}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="list_price"
              component={renderField}
              type="number"
              label="Precio de Producto"
              disabled={readOnly}
            />
          </FormGroup>
          {/* tipo de cupon */}
          <div>
            <label>
              Tipo de cupon
              {/* cupon de porcentaje es decir "se descuenta sierto porsentaje al producto" */}
              <div>
                <FormGroup>
                  <Field
                    name="porcentaje_descuento"
                    component={renderField}
                    type="radio"
                    value="porcentaje"
                    label="Porcentaje Descuento"
                    disabled={readOnly}
                  />
                  <Field
                    component={renderField}
                    type="number"
                    name="discount_percenatage"
                    disabled={discountPercenatage !== 'porcentaje' && readOnly}
                  />
                </FormGroup>
                {/* cupon de precio es decir monetario "se descuentan 100 pesos a cierto producto" */}
                <FormGroup>
                  <Field
                    name="porcentaje_descuento"
                    component={renderField}
                    type="radio"
                    value="dinero"
                    label="Precio Descuento"
                  />
                  <Field
                    component={renderField}
                    type="number"
                    name="discount_price"
                    disabled={discountPercenatage !== 'dinero' && readOnly}
                  />
                </FormGroup>
                <FormGroup>
                  <Field
                    component={renderField}
                    type="input"
                    name="show_percentaje"
                    disabled
                    label="porcentaje de descuento"
                  />
                </FormGroup>
              </div>
            </label>
          </div>

          {/* termnos de uso  */}
          <FormGroup>
            <Field
              name="terms_of_user"
              component={renderField}
              type="input"
              label="Terminos de uso"
              disabled={readOnly}
            />
          </FormGroup>

          <hr />
          {/* separador */}
          <h4>
            <Badge color="info">Restricciones</Badge>
          </h4>

          {/* fechas de inicio y fin del cupon */}
          {/* formato de fechas "2019-05-24" */}
          <FormGroup>
            <Label>Valido desde</Label>

            <Field
              name="valid_sice"
              component={renderField}
              type="date"
              disabled={readOnly}
            />
          </FormGroup>

          <FormGroup>
            <label>Valido hasta</label>
            <Field
              name="valid_until"
              component={renderField}
              type="date"
              disabled={readOnly}
            />
          </FormGroup>

          {/* publicar cupon en una fecha determinada*/}
          <FormGroup>
            <Label> Publicar cupon en esta fecha</Label>
            <Field name="published_sice" component={renderField} type="data" />
          </FormGroup>

          {/* total de cupones  */}

          <FormGroup>
            <Field
              name="total_coupons"
              component={renderField}
              type="number"
              label="Total de cupones"
              disabled={readOnly}
            />
          </FormGroup>

          {/* uso del cupon por usuario */}

          <FormGroup>
            <Field
              name="uses_per_user"
              component={renderField}
              type="number"
              label="Usos por usuario"
              disabled={readOnly}
            />
          </FormGroup>

          {/* publicar cupon */}

          <FormGroup>
            <Field
              name="is_published"
              component={renderField}
              type="checkbox"
              label="Publicar cupon"
              disabled={readOnly}
            />
          </FormGroup>

          {/* habilitar cupon */}

          <FormGroup>
            <Field
              name="is_enable"
              component={renderField}
              type="checkbox"
              label="Habilitar cupon"
              disabled={readOnly}
            />
          </FormGroup>

          {/*total de usos del cupoen el cual sera por default*/}
          <FormGroup>
            <Field
              name="total_uses"
              component="input"
              normalize={greaterThan('total_uses')}
              disabled
            />
          </FormGroup>

          <button type="submit">Guardar</button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Limpiar valores
          </button>
        </Form>
      </div>
    );
  }
}

export const CouponForm = reduxForm({
  form: 'contact',
  validate,
  warn,
})(CouponFormComponent);
