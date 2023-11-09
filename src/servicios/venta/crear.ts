import { Collection, getModel } from "../../constants-definitions";
import { CrearVentaDTO, EsquemaVentaMongo, Venta } from "../../entidades";
import { v4 as uuidv4 } from "uuid";

export const crearVenta = async (
  data: CrearVentaDTO
): Promise<Venta | Error> => {
  const modelo = await getModel(Collection.VENTAS, EsquemaVentaMongo);

  try {
    // Obtener el último número de factura
    const ultimoNumeroFactura = await modelo
      .find()
      .sort({ numero_factura: -1 })
      .limit(1)
      .select("numero_factura");

    // Generar el nuevo número de factura
    const nuevoNumeroFactura = ultimoNumeroFactura.length
      ? ultimoNumeroFactura[0].numero_factura + 1
      : 1;

    // Asignar el nuevo número de factura a la venta
    const uuid = uuidv4();
    const nueva_venta = new modelo({
      ...data,
      uuid,
      numero_factura: nuevoNumeroFactura,
    });

    // Guardar la nueva venta en la base de datos
    await nueva_venta.save();

    // Devolver la venta creada
    return { ...nueva_venta._doc };
  } catch (error) {
    // Manejar errores
    return new Error("Error al crear la venta");
  }
};
