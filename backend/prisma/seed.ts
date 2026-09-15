import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma=new PrismaClient()

async function seedMasters(){
    const passwordHash=await bcrypt.hash('master123', 10)

    const mastersData=[
        {
            email:'alexey@headman.ru',
            firstName:'Алексей',
            lastName:'Волков',
            phone:'+79991111111',
            specialization:'ТОП-МАСТЕР',
            experienceYears:8,
            bio:'Специализируюсь на классических и современных мужских стрижках.',
        },
        {
            email:'maxim@headman.ru',
            firstName:'Максим',
            lastName:'Орлов',
            phone:'+79992222222',
            specialization:'СТАРШИЙ МАСТЕР',
            experienceYears:6,
            bio:'Мастер мужских стрижек и укладок.',
        },
        {
            email:'dmitry@headman.ru',
            firstName:'Дмитрий',
            lastName: 'Смирнов',
            phone:'+79993333333',
            specialization:'МАСТЕР',
            experienceYears:4,
            bio:'Эксперт по работе с бородой и классическому бритью.',
        },
    ]

    for(const data of mastersData){
        const user=await prisma.user.upsert({
            where:{email:data.email},
            update:{},
            create:{
                email:data.email,
                passwordHash,
                role:'MASTER',
                firstName:data.firstName,
                lastName:data.lastName,
                phone:data.phone,
            },
        })

        const master=await prisma.master.upsert({
            where:{userId:user.id},
            update:{},
            create:{
                userId:user.id,
                specialization:data.specialization,
                experienceYears:data.experienceYears,
                bio:data.bio,
            },
        })

        const services=await prisma.service.findMany()

        for(const service of services){
            await prisma.masterService.upsert({
                where:{
                    masterId_serviceId:{
                        masterId:master.id,
                        serviceId:service.id,
                    },
                },
                update:{},
                create:{
                    masterId:master.id,
                    serviceId:service.id,
                },
            })
        }
    }

    console.log(`Masters seeded: ${mastersData.length}`)
}

async function main(){
    const services=[
        {name:'Мужская стрижка',description:'Классическая или современная стрижка с укладкой',category:'Стрижки',price:1500,durationMinutes:60},
        {name:'Стрижка машинкой',description:'Стрижка без использования ножниц',category:'Стрижки',price:1000,durationMinutes:30},
        {name:'Детская стрижка',description:'Для юных клиентов до 12 лет',category:'Стрижки',price:1200,durationMinutes:45},
        {name:'Стрижка + укладка',description:'Стрижка с финальной укладкой волос',category:'Стрижки',price:1800,durationMinutes:75},
        {name:'Стрижка пенсионерам',description:'Аккуратная стрижка для старшего поколения',category:'Стрижки',price:1000,durationMinutes:45},
        {name:'Бритва + стрижка',description:'Комбо из стрижки и работы опасной бритвой',category:'Стрижки',price:2200,durationMinutes:90},
        {name:'Стрижка бороды',description:'Форма, длина и аккуратная окантовка',category:'Борода',price:1000,durationMinutes:30},
        {name:'Моделирование бороды',description:'Создание формы под черты лица',category:'Борода',price:1200,durationMinutes:45},
        {name:'Королевское бритьё',description:'Классическое бритьё опасной бритвой',category:'Борода',price:1500,durationMinutes:60},
        {name:'Бритьё головы',description:'Чистое бритьё головы опасной бритвой',category:'Борода',price:1200,durationMinutes:45},
        {name:'Уход за бородой',description:'Масла, бальзамы и профессиональный уход',category:'Борода',price:800,durationMinutes:20},
        {name:'Окантовка бороды',description:'Чёткие контуры и аккуратная форма',category:'Борода',price:600,durationMinutes:15},
        {name:'Укладка',description:'Финальная укладка с использованием профессиональных средств',category:'Уход',price:800,durationMinutes:30},
        {name:'Укладка + тонирование',description:'Укладка и лёгкое изменение оттенка волос',category:'Уход',price:1500,durationMinutes:60},
        {name:'Камуфляж седины',description:'Естественное уменьшение видимости седых волос',category:'Уход',price:1500,durationMinutes:45},
        {name:'Тонирование волос',description:'Коррекция и обновление оттенка волос',category:'Уход',price:1800,durationMinutes:60},
        {name:'Мытьё головы + уход',description:'Очищение и базовый уход за волосами',category:'Уход',price:500,durationMinutes:20},
        {name:'Маска для волос',description:'Профессиональный уход и восстановление',category:'Уход',price:700,durationMinutes:30},
        {name:'Гигиенический маникюр',description:'Уход за ногтями и кожей рук',category:'Дополнительно',price:1350,durationMinutes:60},
        {name:'Мужской педикюр',description:'Комплексный уход за стопами и ногтями',category:'Дополнительно',price:2000,durationMinutes:90},
        {name:'Депиляция воском - лицо',description:'Удаление нежелательных волос на лице',category:'Дополнительно',price:800,durationMinutes:30},
        {name:'Депиляция воском - грудь / спина',description:'Удаление волос воском',category:'Дополнительно',price:1500,durationMinutes:45},
        {name:'Косметическая чистка лица',description:'Глубокое очищение и уход за кожей',category:'Дополнительно',price:2500,durationMinutes:90},
        {name:'Массаж головы',description:'Расслабляющий массаж кожи головы',category:'Дополнительно',price:1000,durationMinutes:30},
        {name:'Стрижка + борода',description:'Стрижка и оформление бороды',category:'Комбо',price:2200,durationMinutes:90},
        {name:'Стрижка + бритьё',description:'Стрижка и классическое бритьё',category:'Комбо',price:2500,durationMinutes:120},
        {name:'Стрижка + борода + уход',description:'Полный уход за волосами и бородой',category:'Комбо',price:2800,durationMinutes:120},
        {name:'Полный образ',description:'Стрижка + борода + маникюр',category:'Комбо',price:3500,durationMinutes:150},
        {name:'Отец + сын',description:'Две стрижки по специальной цене',category:'Комбо',price:2400,durationMinutes:105},
        {name:'Персональный стилист',description:'Индивидуальный подбор образа и рекомендации',category:'Премиум',price:3500,durationMinutes:120},
        {name:'Свадебный образ',description:'Подготовка образа для жениха и гостя',category:'Премиум',price:5000,durationMinutes:180},
        {name:'Фотосессия с укладкой',description:'Профессиональная укладка для фотосессии',category:'Премиум',price:4500,durationMinutes:120},
        {name:'Стрижка у топ-мастера',description:'Работа мастера высшей категории',category:'Премиум',price:3000,durationMinutes:60},
    ]

    for(const service of services){
        await prisma.service.upsert({
            where:{name:service.name},
            update:{
                description:service.description,
                category:service.category,
                price:service.price,
                durationMinutes:service.durationMinutes,
            },
            create:service,
        })
    }
    console.log(`Services seeded: ${services.length}`)

    await seedMasters()
}

main().catch((e)=>{
    console.error(e)
    process.exit(1)
}).finally(()=>prisma.$disconnect())