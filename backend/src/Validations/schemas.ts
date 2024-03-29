import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(2),
    address: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z
      .string()
      .regex(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        "Telefone inválido"
      ),
  })
  .strict();

export const userLoginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  .strict();

export const userUpdateSchema = z
  .object({
    name: z.string().min(2),
    address: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6).optional(),
    phone: z
      .string()
      .regex(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
        "Telefone inválido"
      ),
    img: z.string(),
  })
  .strict();

const pizzasOrderAndCartSchema = z
  .object({
    pizzaId: z.string(),
    size: z.enum(["pequeno", "médio", "grande"]),
    border: z.boolean(),
    quantity: z.number(),
  })
  .strict();

export const saleInfoSchema = pizzasOrderAndCartSchema.omit({ pizzaId: true }).strict();

export const orderSchema = z
  .object({
    cartId: z.string(),
    pizzas: z.array(pizzasOrderAndCartSchema),
  })
  .strict();

export const cartSchema = z
  .object({
    pizzas: z.array(pizzasOrderAndCartSchema),
  })
  .strict();

export const cartItemSchema = z
  .object({
    cartId: z.string(),
    item: pizzasOrderAndCartSchema,
  })
  .strict();

export const pizzaSchema = z
  .object({
    flavor: z.string(),
    type: z.enum(["Doce", "Salgado"]),
    price: z.number(),
    ingredients: z.array(z.string()),
    img: z.string(),
  })
  .strict();

export const pizzaUpdateSchema = z
  .object({
    id: z.string(),
    flavor: z.string(),
    type: z.enum(["Doce", "Salgado"]),
    price: z.number(),
    ingredients: z.array(z.string()),
    img: z.string(),
  })
  .strict();
