import React from 'react';
import { renderField } from '../componets/RenderField';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { Badge, Form, FormGroup, Label } from 'reactstrap';
import { validate, warn } from '../componets/Validations';
import { ImageComponent } from '../componets/ImageComponent';

class CouponFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.calculateFinalPrice = this.calculateFinalPrice.bind(this);
  }

  calculateFinalPrice(event, newValue, previousValue, name) {
    const { dispatch } = this.props;
    const values = { ...this.props, [name]: newValue };
    const { list_price, discount_price, discount_percenatage } = values;

    if (list_price & discount_price || discount_percenatage) {
      let finalPrice = 0;
      if (discount_price) {
        finalPrice = list_price - discount_price;
      }
      if (discount_percenatage) {
        finalPrice = list_price - (list_price * discount_percenatage) / 100;
      }

      dispatch(change('contact', 'show_percentaje', finalPrice));
    }
  }
  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      discountPercenatage,

      percentage_calculation_money,
      percentage_calculation_percentage,
      list_price,
      discount_price,
      discount_percenatage,
      dispatch,
    } = this.props;

    const greaterThan = otherField => (value, previousValue, allValues) =>
      parseFloat(value) > parseFloat(allValues[otherField])
        ? value
        : previousValue;
    console.log({ list_price, discount_price, discount_percenatage, dispatch });

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
            />
          </FormGroup>
          {/* descripcion del cupon */}
          <FormGroup>
            <Field
              name="description"
              component={renderField}
              type="text"
              label="Descripcion"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="list_price"
              component={renderField}
              type="number"
              label="Precio de Producto"
              onChange={this.calculateFinalPrice}
            />
          </FormGroup>
          {/* tipo de cupon */}
          <div>
            <label>
              <h4>
                <Badge color="info"> Tipo de cupon</Badge>
              </h4>

              {/* cupon de porcentaje es decir "se descuenta sierto porsentaje al producto" */}
              <div>
                <FormGroup>
                  <Field
                    name="porcentaje_descuento"
                    component={renderField}
                    type="radio"
                    value="porcentaje"
                    label="Porcentaje Descuento"
                  />
                  <Field
                    component={renderField}
                    type="number"
                    name="discount_percenatage"
                    disabled={discountPercenatage !== 'porcentaje'}
                    onChange={this.calculateFinalPrice}
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
                    disabled={discountPercenatage !== 'dinero'}
                    onChange={this.calculateFinalPrice}
                  />
                </FormGroup>
                {/* Este es en base al tipo de cupon que utilizo el usuario */}
                <FormGroup>
                  <Field
                    component={renderField}
                    type="input"
                    name="show_percentaje"
                    disabled
                    label="Equivalente de cupon en Dinero o Porcentaje"
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

            <Field name="valid_sice" component={renderField} type="date" />
          </FormGroup>

          <FormGroup>
            <Label>Valido hasta</Label>
            <Field name="valid_until" component={renderField} type="date" />
          </FormGroup>

          {/* publicar cupon en una fecha determinada*/}
          <FormGroup>
            <Label> Publicar cupon en esta fecha</Label>
            <Field name="published_sice" component={renderField} type="date" />
          </FormGroup>

          {/* total de cupones  */}

          <FormGroup>
            <Field
              name="total_coupons"
              component={renderField}
              type="number"
              label="Total de cupones"
            />
          </FormGroup>

          {/* uso del cupon por usuario */}

          <FormGroup>
            <Field
              name="uses_per_user"
              component={renderField}
              type="number"
              label="Usos por usuario"
            />
          </FormGroup>

          {/* publicar cupon */}

          <FormGroup>
            <Field
              name="is_published"
              component={renderField}
              type="checkbox"
              label="Publicar cupon"
            />
          </FormGroup>

          {/* habilitar cupon */}

          <FormGroup>
            <Field
              name="is_enable"
              component={renderField}
              type="checkbox"
              label="Habilitar cupon"
            />
          </FormGroup>

          {/*total de usos del cupoen el cual sera por default*/}
          <FormGroup>
            <Label>Cupones echos validos</Label>
            <Field
              name="total_uses"
              component="input"
              normalize={greaterThan('total_uses')}
              disabled
            />
          </FormGroup>
          {/* Localizacion del local puede o no llenar este campo sino se manda vacio */}
          <FormGroup>
            <Field
              name="location"
              component={renderField}
              type="input"
              label="Localizacion del Local"
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
