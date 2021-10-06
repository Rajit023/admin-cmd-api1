import bcrypt from 'bcrypt'
const saltRounds =10;


export const hashpassword = plainPass => {
    return bcrypt.hashSync(plainPass,saltRounds);
};


// export const comparePassword = PlainPass => {
    // return bcrypt.compareSync(plainPass, hashPassFromDB)

// }