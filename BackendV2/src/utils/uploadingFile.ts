import multer from "multer";

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

export const upload = multer({ storage });
