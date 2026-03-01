import express from 'express';
import { nanoid } from 'nanoid';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: Автоматически сгенерированный уникальный идентификатор
 *           example: "abc123"
 *         name:
 *           type: string
 *           description: Название товара
 *           example: "Ноутбук ASUS"
 *         category:
 *           type: string
 *           description: Категория товара
 *           example: "Электроника"
 *         description:
 *           type: string
 *           description: Описание товара
 *           example: '15.6" ноутбук с процессором Intel Core i5, 16GB RAM, 512GB SSD'
 *         price:
 *           type: number
 *           description: Цена товара в рублях
 *           example: 75000
 *         stock:
 *           type: number
 *           description: Количество товара на складе
 *           example: 10
 *         rating:
 *           type: number
 *           description: Рейтинг товара (0-5)
 *           example: 4.5
 *         image:
 *           type: string
 *           description: URL изображения товара
 *           example: "https://example.com/laptop.jpg"
 *     ProductInput:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         name:
 *           type: string
 *           description: Название товара
 *           example: "Ноутбук ASUS"
 *         category:
 *           type: string
 *           description: Категория товара
 *           example: "Электроника"
 *         description:
 *           type: string
 *           description: Описание товара
 *           example: '15.6" ноутбук с процессором Intel Core i5, 16GB RAM, 512GB SSD'
 *         price:
 *           type: number
 *           description: Цена товара в рублях
 *           example: 75000
 *         stock:
 *           type: number
 *           description: Количество товара на складе
 *           example: 10
 *         rating:
 *           type: number
 *           description: Рейтинг товара (0-5)
 *           example: 4.5
 *         image:
 *           type: string
 *           description: URL изображения товара
 *           example: "https://example.com/laptop.jpg"
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Сообщение об ошибке
 *           example: "Product not found"
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Управление товарами в интернет-магазине
 */

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API интернет-магазина',
            version: '1.0.0',
            description: 'Документация API для управления товарами в интернет-магазине',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Локальный сервер',
            },
        ],
    },
    apis: ['./server.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

let products = [
    {
        id: nanoid(6),
        name: 'Ноутбук ASUS',
        category: 'Электроника',
        description: '15.6" ноутбук с процессором Intel Core i5, 16GB RAM, 512GB SSD',
        price: 75000,
        stock: 10,
        rating: 4.5,
        image: 'https://example.com/laptop.jpg'
    },
    {
        id: nanoid(6),
        name: 'Смартфон Samsung',
        category: 'Электроника',
        description: '6.5" AMOLED дисплей, 128GB память, тройная камера',
        price: 45000,
        stock: 15,
        rating: 4.7,
        image: 'https://example.com/phone.jpg'
    },
    {
        id: nanoid(6),
        name: 'Наушники Sony',
        category: 'Аксессуары',
        description: 'Беспроводные наушники с шумоподавлением',
        price: 12000,
        stock: 8,
        rating: 4.8,
        image: 'https://example.com/headphones.jpg'
    },
    {
        id: nanoid(6),
        name: 'Планшет iPad',
        category: 'Электроника',
        description: '10.2" дисплей, 64GB память, поддержка Apple Pencil',
        price: 35000,
        stock: 5,
        rating: 4.9,
        image: 'https://example.com/ipad.jpg'
    },
    {
        id: nanoid(6),
        name: 'Клавиатура Logitech',
        category: 'Аксессуары',
        description: 'Беспроводная клавиатура, подсветка, Bluetooth',
        price: 4500,
        stock: 20,
        rating: 4.6,
        image: 'https://example.com/keyboard.jpg'
    },
    {
        id: nanoid(6),
        name: 'Мышь Razer',
        category: 'Аксессуары',
        description: 'Игровая мышь, 16000 DPI, RGB подсветка',
        price: 3500,
        stock: 12,
        rating: 4.5,
        image: 'https://example.com/mouse.jpg'
    },
    {
        id: nanoid(6),
        name: 'Монитор LG',
        category: 'Электроника',
        description: '27" 4K IPS монитор, HDR10, USB-C',
        price: 28000,
        stock: 7,
        rating: 4.7,
        image: 'https://example.com/monitor.jpg'
    },
    {
        id: nanoid(6),
        name: 'Внешний SSD',
        category: 'Комплектующие',
        description: '1TB внешний SSD, USB 3.2, скорость 1000MB/s',
        price: 8500,
        stock: 14,
        rating: 4.8,
        image: 'https://example.com/ssd.jpg'
    },
    {
        id: nanoid(6),
        name: 'Принтер HP',
        category: 'Оргтехника',
        description: 'Лазерный принтер, двусторонняя печать, Wi-Fi',
        price: 12500,
        stock: 6,
        rating: 4.3,
        image: 'https://example.com/printer.jpg'
    },
    {
        id: nanoid(6),
        name: 'Роутер TP-Link',
        category: 'Сетевое оборудование',
        description: 'Wi-Fi 6 роутер, скорость до 3000Mbps',
        price: 5500,
        stock: 9,
        rating: 4.6,
        image: 'https://example.com/router.jpg'
    }
];

app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", methods: ["GET", "POST", "PATCH", "DELETE"], allowedHeaders: ["Content-Type", "Authorization"] }));

app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] [${req.method}] ${res.statusCode} ${req.path}`);
        if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
            console.log('Body:', req.body);
        }
    });
    next();
});

function findProductOr404(id, res) {
    const product = products.find(p => p.id == id);
    if (!product) {
        res.status(404).json({ error: "Product not found" });
        return null;
    }
    return product;
}

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Создание нового товара
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Товар успешно создан
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Ошибка в данных запроса
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
app.post("/api/products", (req, res) => {
    const { name, category, description, price, stock, rating, image } = req.body;
    const newProduct = {
        id: nanoid(6),
        name: name.trim(),
        category: category.trim(),
        description: description.trim(),
        price: Number(price),
        stock: Number(stock),
        rating: rating ? Number(rating) : 0,
        image: image || ''
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Получение списка всех товаров
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Список товаров
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
app.get("/api/products", (req, res) => {
    res.json(products);
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Получение товара по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID товара
 *         example: "abc123"
 *     responses:
 *       200:
 *         description: Информация о товаре
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Товар не найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = findProductOr404(id, res);
    if (!product) return;
    res.json(product);
});

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Обновление товара по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID товара
 *         example: "abc123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Обновленная информация о товаре
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Ошибка в данных запроса или ничего не указано для обновления
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Товар не найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
app.patch("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = findProductOr404(id, res);
    if (!product) return;

    if (req.body?.name === undefined && req.body?.category === undefined && req.body?.description === undefined && req.body?.price === undefined && req.body?.stock === undefined && req.body?.rating === undefined && req.body?.image === undefined) {
        return res.status(400).json({ error: "Nothing to update" });
    }

    const { name, category, description, price, stock, rating, image } = req.body;
    if (name !== undefined) product.name = name.trim();
    if (category !== undefined) product.category = category.trim();
    if (description !== undefined) product.description = description.trim();
    if (price !== undefined) product.price = Number(price);
    if (stock !== undefined) product.stock = Number(stock);
    if (rating !== undefined) product.rating = Number(rating);
    if (image !== undefined) product.image = image;

    res.json(product);
});

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Удаление товара по ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID товара
 *         example: "abc123"
 *     responses:
 *       204:
 *         description: Товар успешно удален (нет содержимого)
 *       404:
 *         description: Товар не найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
app.delete("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const exists = products.some((p) => p.id === id);
    if (!exists) return res.status(404).json({ error: "Product not found" });
    products = products.filter((p) => p.id !== id);
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
    console.log(`Swagger документация доступна по адресу http://localhost:${port}/api-docs`);
});