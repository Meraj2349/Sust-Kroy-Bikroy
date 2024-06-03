import bcrypt from 'bcryptjs';

const users= [
    {
        name: 'Admin User',
        email: 'merajislam2349@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'juniorhsin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'ibrahimkhalil@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users;
