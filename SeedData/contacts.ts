"use client";

export interface Contact {
  name: string;
  url: string;
  email: string;
  phone: string;
}

export const contacts: Contact[] = [
  {
    name: "Albert Einstein",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    email: "al.einstein@rolodex.com",
    phone: "802-888-5555",
  },
  {
    name: "Marvin Minsky",
    url: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201601/MIT-Marvin-Minsky-02_0.jpg?itok=4FLPFYOT",
    email: "marvin.minsky@rolodex.com",
    phone: "802-888-7777",
  },
  {
    name: "Margaret Hamilton",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/440px-Margaret_Hamilton_1995.jpg",
    email: "maggie.hamilton@rolodex.com",
    phone: "802-888-8888",
  },
  {
    name: "Ada Lovelace",
    url: "https://media.newyorker.com/photos/64123041652f9d9fe976fff0/master/w_2240,c_limit/ra1146.jpg",
    email: "ada.lovelace@rolodex.com",
    phone: "802-888-6666",
  },
];

export const sortedContacts = contacts
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name));
