# The Adventure Logbook
![AdventureLogbookLogo](https://user-images.githubusercontent.com/66916708/101431299-35153c00-38cc-11eb-9dac-6155df5d3bd9.png)
This is my capstone project for my front-end development semester at The Nashville Software School. It is a single page application for the user to find the best quality rock climbs in any area, store them in their To-Do List and then add them to their Logbook once they have completed them. It shows weather in the area of the climb and if any other user has logged it their comments will appear in the details modal. 

## The Motivation
Rock Climbing is my passion, outside of web development, so I took this oppurtunity to build an application I could use to keep track of climbs that I would like to do in the future, and store the ones from the past. I always found it difficult to find crags near an area I was traveling without doing lots of research, so this app makes all the planning easier.

## Technologies
* React.js
* Google Maps API
* Mountain Project API
* Open Weather API
* Matierial UI
* Google Firebase
* Reactstrap


## Deployed Site
[Adventure Logbook](https://adventure-logbook.netlify.app/) <br/>[![Netlify Status](https://api.netlify.com/api/v1/badges/0f5ae98c-20fe-4f8c-b3f0-aeb0fe5d4963/deploy-status)](https://app.netlify.com/sites/adventure-logbook/deploys)

## Screenshots
![screencapture-localhost-3000-todo-2020-12-12-13_47_35](https://user-images.githubusercontent.com/66916708/101994007-99e1e500-3c84-11eb-85f5-e7becbd4f039.png)
![Screen Shot 2020-12-19 at 8 08 37 AM](https://user-images.githubusercontent.com/66916708/102691353-74e3f980-41d1-11eb-8f59-f6e4e6617850.png)

## ERD
![Screen Shot 2020-12-14 at 9 31 46 PM](https://user-images.githubusercontent.com/66916708/102691352-744b6300-41d1-11eb-82ed-0d6fec0e4aa8.png)

## Code Snippet
My Cards that display post-search using hooks and material UI
```
export default function ClimbCard({ routeData }) {

// If the image doesnt have an image from the API, it will be given a stock photoi to use

  const imageArray = [stock1, stock2, stock3, stock4, stock5, stock6, stock7];

  const getRandomImage = () => {
    const image = imageArray[Math.floor(Math.random() * imageArray.length)];
    return image;
  };

  const getRandomValue = () => (Math.random() * (0.0090 - 0.0010) + 0.0010).toFixed(4);

  const [success, setSuccess] = useState(false);

  // Slightly adjusting the longitude and latitude here so the markers dont pile on top of each other
  const latitudeValue = +parseFloat(routeData.latitude) + +getRandomValue(0.001, 0.009);
  const longitudeValue = +parseFloat(routeData.longitude) + +getRandomValue(0.001, 0.009);

  const userKey = getUid();
  const climbObject = {
    id: routeData.id,
    name: routeData.name,
    imageUrl: routeData.imgMedium,
    grade: routeData.rating,
    stars: routeData.stars,
    type: routeData.type,
    userId: userKey,
    url: routeData.url,
    state: routeData.location[0],
    region: routeData.location[1],
    area: routeData.location[2],
    longitude: longitudeValue,
    latitude: latitudeValue,
  };

  const addEventClick = () => {
    addClimb(climbObject).then(() => {
      setSuccess({
        success: true,
      });
      setTimeout(() => {
        setSuccess(() => false);
      }, 3000);
    });
  };

  const classes = useStyles();

  return (
    <Card className={`${classes.root} m-2 toDoCard d-flex flex-column`}>
      {success ? <ClimbAddedToToDo routeData={routeData}/> : <></>}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            routeData.imgMedium === '' ? getRandomImage() : routeData.imgMedium
          }
          title='Contemplative Reptile'
        />
        <CardContent className='toDoBody'>
          <Typography gutterBottom variant='h5' component='h2'>
            {routeData.name}
          </Typography>
          <Typography variant='body1' component='h3'>
            {routeData.rating}
          </Typography>
          <Typography variant='body2' color='primary' component='h6'>
            {routeData.stars}/5 Stars
          </Typography>
          {routeData.location[2] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              {routeData.location[2]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Area: </b>
              N/A
            </Typography>
          )}
          {routeData.location[1] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              {routeData.location[1]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              N/A
            </Typography>
          )}
          {routeData.location[0] !== undefined ? (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>State: </b>
              {routeData.location[0]}
            </Typography>
          ) : (
            <Typography variant='body2' color='textSecondary' component='h6'>
              <b>Region: </b>
              N/A
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className='buttonToDoContainer d-flex mt-auto justify-content-center'>
        <Button variant="contained" color="primary" onClick={() => {
          addEventClick();
        }}>Add Climb</Button>
        <AppModal
          btnColor={'outline-info'}
          title={'Weather/Info'}
          buttonLabel={'Details'}
          className2={'btn btn-md'}
        >
          <ClimbDetails routeData={routeData}/>
        </AppModal>
      </CardActions>
    </Card>
  );
}
```


## Loom Video
[My Overview of the project planning](https://www.loom.com/share/0574a09eaec242f3821c712b15bbd349)

## Wireframe
[Figma Wireframe](https://www.figma.com/file/AKMpFD8OXHPdk5E5DRpWBj/Adventure-Logbook-Front-End-Capstone?node-id=12%3A4017)

