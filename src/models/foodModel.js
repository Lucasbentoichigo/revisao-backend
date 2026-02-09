import prisma from '../utils/prismaClient.js';

export const create = async (data) => {
    return await prisma.Foods.create({ data });
};

export const findAll = async (filters = {}) => {
    const { name, description, price, category } = filters;
    const where = {};

    if (name) where.name = { contains: name, mode: 'insensitive' };
    if (description) where.description = { contains: description, mode: 'insensitive' };
    if (price !== undefined) where.price = { gte: parseFloat(price) };
    if (category) where.category = { contains: category, mode: 'insensitive' };

    return await prisma.Foods.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });
};

export const findById = async (id) => {
    return await prisma.Foods.findUnique({
        where: { id: parseInt(id) },
    });
};

export const update = async (id, data) => {
    return await prisma.Foods.update({
        where: { id: parseInt(id) },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.Foods.delete({
        where: { id: parseInt(id) },
    });
};