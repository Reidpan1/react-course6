export async function getAllEvents(){
  const response = await fetch('https://nextjs-course-701f2-default-rtdb.firebaseio.com/events.json');
}


export async function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }