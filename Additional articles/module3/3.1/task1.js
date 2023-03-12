const getUsers = async (names) => {
  let users = [];

  for (let name of names) {
    let user = await fetch(`https://api.github.com/users/${name}`);
    if (user.ok) {
      const res = await user.json();
      users.push(res);
    } else {
      return null;
    }
  }

  let results = await Promise.all(jobs);
  return results;
};
