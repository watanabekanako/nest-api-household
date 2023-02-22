import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts: any = [];

for (let i = 0; i < 100; i++) {
  posts.push({ title: `title ${i + 1}` });
}

async function main() {
  // カテゴリの作成
  const [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
    category9,
    category10,
    category11,
    category12,
  ] = await Promise.all([
    prisma.category.create({
      data: {
        name: '食費',
      },
    }),
    prisma.category.create({
      data: {
        name: '日用品',
      },
    }),
    prisma.category.create({
      data: {
        name: '衣服',
      },
    }),
    prisma.category.create({
      data: {
        name: '美容',
      },
    }),
    prisma.category.create({
      data: {
        name: '交際費',
      },
    }),
    prisma.category.create({
      data: {
        name: '医療費',
      },
    }),
    prisma.category.create({
      data: {
        name: '通信費',
      },
    }),
    prisma.category.create({
      data: {
        name: '光熱費',
      },
    }),
    prisma.category.create({
      data: {
        name: '交通費',
      },
    }),
    prisma.category.create({
      data: {
        name: '教育費',
      },
    }),
    prisma.category.create({
      data: {
        name: '住居費',
      },
    }),
    prisma.category.create({
      data: {
        name: 'その他',
      },
    }),
  ]);

  // // ユーザーの作成
  // const [user1] = await Promise.all([
  //   prisma.user.create({
  //     data: {
  //       password: '12345678',
  //       email: 'user1@example.com',
  //     },
  //   }),
  // ]);

  // postの作成
  // const [post1, post2] = await Promise.all([
  //   prisma.post.create({
  //     data: {
  //       content: 'post1 content',
  //       authorId: user1.id,
  //       categoryId: category1.id,
  //       createdAt: '2023-01-13',
  //     },
  //   }),

  //   // 必須項目だけのやつ
  //   prisma.post.create({
  //     data: {
  //       content: 'post2 content',
  //       authorId: user1.id,
  //       categoryId: category1.id,
  //       createdAt: '2023-01-13',
  //     },
  //   }),
  // ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
