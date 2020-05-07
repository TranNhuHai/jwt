'user strict';
const debug = console.log.bind(console);

let getUsers = (req, res) => {
  debug(`authorize`);
  const users = [{
      name: "abc"
    },
    {
      name: "bcd"
    },
    {
      name: "cde"
    }
  ];
  return res.status(200).json(users);
}
module.exports = {
  getUsers: getUsers,
};