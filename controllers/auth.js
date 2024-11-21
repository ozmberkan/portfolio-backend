const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Auth = require("../models/auth");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Auth.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Kullanıcı adı zaten alınmış!" });
    }

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Lütfen tüm alanları doldurunuz!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({
      username,
      password: hashedPassword,
    });

    const userToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      role: newUser.role,
      token: userToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Auth.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Kullanıcı bulunamadı!" });
    }

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) {
      return res.status(400).json({ message: "Hatalı şifre!" });
    }

    const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      id: user._id,
      username: user.username,
      role: user.role,
      token: userToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
