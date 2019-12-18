User.destroy_all
Item.destroy_all
Convo.destroy_all
Message.destroy_all

user1 = User.create!(first_name:"Yagmur", last_name:"Hesenova", email: "fakeyagmur@mail.com", password: 'qwerty')
user2 = User.create!(first_name:"Eli", last_name:"Mehdiyev", email: "fakemehdiyev@mail.com", password: 'qwerty')

item1 = Item.create!(title:"cookies", description:"the best", available: true, category: "food", user_id: user1.id)
item2 = Item.create!(title:"jacket", description:"old one", available: true, category: "non-food", user_id: user2.id)
item3 = Item.create!(title:"table", description:"old one", available: true, category: "non-food", user_id: user2.id)
item4 = Item.create!(title:"sofa", description:"old one", available: true, category: "non-food", user_id: user1.id)
item5 = Item.create!(title:"phone", description:"old one", available: true, category: "non-food", user_id: user1.id)


convo1 = Convo.create!(sender_id: user1.id, receiver_id: user2.id)

message = Message.create!(content: "Hi", convo_id: convo1.id)