import { users } from "./data";

export async function GET() {
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const newUser = {
    id: users.length + 1,
    name: body.title,
    age: body.age,
  };
  users.push(newUser);
  return new Response(newUser.json());
}

export async function DELETE(request){
  const body = await request.json();
  const userId = body.id;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return console.log("User deleted successfully");
  } else {
    return console.log("User not found");
    
  }
}