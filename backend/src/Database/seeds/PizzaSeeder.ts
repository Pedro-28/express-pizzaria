import "dotenv/config";

import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Pizza from "../Entities/Pizza";

const { BASE_URL = "http://localhost:3001" } = process.env;

export class PizzaSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const pizzaRepository = dataSource.getRepository(Pizza);

    const pizzaData = [
      {
        flavor: "Quatro Queijos",
        type: "Salgado",
        price: 29.50,
        ingredients: [
          "Queijo",
          "requeijão",
          "gorgonzola",
          "oregano",
          "parmesão ralado",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236544304-ff0c773f-dbd7-44c8-81a4-85497d5ccb54.jpg",
      },
      {
        flavor: "Calabresa",
        type: "Salgado",
        price: 30.00,
        ingredients: ["Queijo", "calabresa", "cebola", "oregano"],
        img: "https://user-images.githubusercontent.com/99993116/236544471-fe3c3da3-fff2-4e94-a365-01fedc27dfc8.jpg",
      },
      {
        flavor: "Pepperoni",
        type: "Salgado",
        price: 29.90,
        ingredients: ["Queijo", "oregano", "pepperoni"],
        img: "https://user-images.githubusercontent.com/99993116/236544602-c4ea81bd-ac4f-45f6-9a93-d84781c355b9.jpg",
      },
      {
        flavor: "Portuguesa",
        type: "Salgado",
        price: 33.90,
        ingredients: ["molho de tomate", "muçarela", "presunto", "ovos", "cebola", "azeitona", "pimentão"],
        img: "https://user-images.githubusercontent.com/99993116/236544754-fcee4f76-8ce6-4401-8585-bc41c0713756.png",
      },
      {
        flavor: "Frango com Catupiry",
        type: "Salgado",
        price: 31.90,
        ingredients: ["frango desfiado", "catupiry", "cebola", "milho"],
        img: "https://user-images.githubusercontent.com/99993116/236544904-37e65c3f-6fa9-4336-8838-9559929414ff.png",
      },
      {
        flavor: "Napolitana",
        type: "Salgado",
        price: 28.90,
        ingredients: ["Queijo", "tomate", "oregano", "parmesão", "ralado"],
        img: "https://user-images.githubusercontent.com/99993116/236545036-4866e4af-de60-4b8b-8ecd-6477452adc93.jpg",
      },
      {
        flavor: "Prestigio",
        type: "Doce",
        price: 30.50,
        ingredients: [
          "chocolate",
          "coco Ralado",
          "leite Condensado",
          "cerejas",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236545424-582342ac-b285-4648-a4f6-b0e681d6be44.jpg",
      },
      {
        flavor: "Chocolate",
        type: "Doce",
        price: 29.00,
        ingredients: ["chocolate artesanal", "morango", "leite Condensado"],
        img: "https://user-images.githubusercontent.com/99993116/236545643-59cd6cc4-c19c-4865-bc3b-5486f5b93fdd.jpg",
      },
      {
        flavor: "Sonho de valsa",
        type: "Doce",
        price: 31.90,
        ingredients: [
          "Muçarela",
          "Chocolate ao leite",
          "pedaços de bombom Sonho de Valsa",
        ],
        img: "https://user-images.githubusercontent.com/99993116/236545841-84ee5fa3-42f6-4b5c-b795-5ac64c519c97.jpg",
      },
    ];

    await pizzaRepository
      .createQueryBuilder()
      .insert()
      .into(Pizza)
      .values(pizzaData)
      .execute();

    await pizzaRepository.save(pizzaData);
  }
}
