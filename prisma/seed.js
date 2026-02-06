import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.foods.createMany({
        data: [
            {
                name: 'Hambúrguer Artesanal',
                description: 'Carne 180g e queijo',
                price: 29.9,
                category: 'Lanche',
                available: true,
            },
            {
                name: 'Pizza Margherita',
                description: 'Mussarela e manjericão',
                price: 44.5,
                category: 'Pizza',
                available: true,
            },
            {
                name: 'Sushi Combo',
                description: '12 peças variadas',
                price: 59.0,
                category: 'Japonesa',
                available: true,
            },
            {
                name: 'Salada Caesar',
                description: 'Frango grelhado',
                price: 24.0,
                category: 'Salada',
                available: true,
            },
            {
                name: 'Lasanha',
                description: 'Bolonhesa com queijo',
                price: 38.0,
                category: 'Massas',
                available: true,
            },
            {
                name: 'Taco Mexicano',
                description: 'Carne e guacamole',
                price: 22.5,
                category: 'Mexicana',
                available: true,
            },
            {
                name: 'Açaí Bowl',
                description: 'Com granola e frutas',
                price: 18.0,
                category: 'Sobremesa',
                available: true,
            },
            {
                name: 'Bolo de Chocolate',
                description: 'Fatia com cobertura',
                price: 12.0,
                category: 'Sobremesa',
                available: true,
            },
            {
                name: 'Suco de Laranja',
                description: 'Natural 300ml',
                price: 9.0,
                category: 'Bebida',
                available: true,
            },
            {
                name: 'Café Espresso',
                description: 'Dose dupla',
                price: 7.5,
                category: 'Bebida',
                available: true,
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
