import champions from '../datasets/champions';

export const getAll = (req, res) => {
    const list = champions.map(elt=>({
        id: elt.id,
        name: elt.name,
        key: elt.key,
        title: elt.title,
        icon: elt.icon
    }));
    res.send(list);
};

export const getOne = (req, res) => {
    const champion = champions.filter(elt=>elt.id == req.params.id).shift();
    if(!champion) return res.send("This champion do not exist !").status(404).end();
    res.send(champion);
};
