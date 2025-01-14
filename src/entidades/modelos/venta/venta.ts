interface dataProducto {
  uuid: string;
  vendedor: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

export interface Venta {
  uuid: string;
  user: string;
  fecha_venta: Date;
  total_venta: number;
  producto: dataProducto[];
  numero_factura: number;
}

export type CrearVentaDTO = Omit<Venta, "uuid">;
export type ActualizarVentaDTO = Partial<Venta>;
