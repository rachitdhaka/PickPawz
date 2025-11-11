import { NavbarMain } from "@/components/NavbarMain";
import SearchBar from "@/components/SearchBar";
import PetCard from "@/components/PetCard";
import Footer from "@/components/Footer";
const Home = () => {


  const pets = [
    {
      id: 1,
      name: "Buddy",
      age: "2 years",
      type: "Dog",
      breed: "Golden Retriever",
      location: "Seattle, WA",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=662&q=80",
      tags: ["Playful", "Vaccinated", "Good with Kids"],
      description:
        "Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets, and he's looking for an active family who can give him lots of love and attention.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Friendly, Energetic, Loyal",
      socialBehavior: "Good with kids, Good with other dogs",
      diet: "Premium dry food, twice daily",
      favoriteTreats: "Peanut butter treats, Dental chews",
    },
    {
      id: 2,
      name: "Luna",
      age: "1 year",
      type: "Cat",
      breed: "Siamese",
      location: "Portland, OR",
      image:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Quiet", "Vaccinated", "Indoor Only"],
      description:
        "Luna is a beautiful Siamese cat with striking blue eyes. She's quiet and gentle, and she loves to curl up in your lap for a nap. She's looking for a calm home where she can be the center of attention.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Quiet, Gentle, Affectionate",
      socialBehavior: "Shy with strangers, Prefers to be the only pet",
      diet: "Wet and dry food, twice daily",
      favoriteTreats: "Freeze-dried chicken treats",
    },
    {
      id: 3,
      name: "Max",
      age: "3 years",
      type: "Dog",
      breed: "Beagle",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Energetic", "Vaccinated", "Good with Kids"],
      description:
        "Max is a friendly and curious Beagle who loves to explore. He's great with children and other dogs, and he's looking for a family who can give him plenty of exercise and mental stimulation.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Curious, Energetic, Friendly",
      socialBehavior: "Good with kids, Good with other dogs",
      diet: "Premium dry food, twice daily",
      favoriteTreats: "Chicken jerky, Dental chews",
    },
    {
      id: 4,
      name: "Milo",
      age: "6 months",
      type: "Cat",
      breed: "Tabby",
      location: "Austin, TX",
      image:
        "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      tags: ["Playful", "Vaccinated", "Good with Cats"],
      description:
        "Milo is a playful and curious tabby kitten who loves to explore and play with toys. He's good with other cats and would do well in a home with another feline friend.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Playful, Curious, Affectionate",
      socialBehavior: "Good with other cats, Shy with dogs",
      diet: "Kitten food, three times daily",
      favoriteTreats: "Wet food, Cat treats",
    },
    {
      id: 5,
      name: "Daisy",
      age: "4 years",
      type: "Dog",
      breed: "Labrador Retriever",
      location: "Chicago, IL",
      image:
        "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Calm", "Vaccinated", "Good with Kids"],
      description:
        "Daisy is a sweet and gentle Labrador Retriever who loves to cuddle. She's great with children and other pets, and she's looking for a loving family who can give her lots of attention.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "Mild arthritis in back legs",
      },
      temperament: "Calm, Gentle, Loyal",
      socialBehavior: "Good with kids, Good with other pets",
      diet: "Senior dog food, twice daily",
      favoriteTreats: "Peanut butter, Carrots",
    },
    {
      id: 6,
      name: "Oliver",
      age: "2 years",
      type: "Cat",
      breed: "Maine Coon",
      location: "Denver, CO",
      image:
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Fluffy", "Vaccinated", "Indoor Only"],
      description:
        "Oliver is a majestic Maine Coon with a beautiful coat. He's friendly and affectionate, and he loves to be brushed. He's looking for a home where he can be pampered and loved.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Friendly, Affectionate, Calm",
      socialBehavior: "Good with other cats, Shy with dogs",
      diet: "Premium dry food, twice daily",
      favoriteTreats: "Wet food, Catnip treats",
    },
    {
      id: 7,
      name: "Bella",
      age: "5 years",
      type: "Dog",
      breed: "Poodle",
      location: "Miami, FL",
      image:
        "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      tags: ["Hypoallergenic", "Vaccinated", "Good with Kids"],
      description:
        "Bella is a smart and elegant Poodle who loves to learn new tricks. She's hypoallergenic and great with children, making her a perfect family pet.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Smart, Elegant, Playful",
      socialBehavior: "Good with kids, Good with other dogs",
      diet: "Premium dry food, twice daily",
      favoriteTreats: "Chicken treats, Dental chews",
    },
    {
      id: 8,
      name: "Charlie",
      age: "3 years",
      type: "Cat",
      breed: "Ragdoll",
      location: "Boston, MA",
      image:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      tags: ["Fluffy", "Vaccinated", "Calm"],
      description:
        "Charlie is a beautiful Ragdoll cat with striking blue eyes. He's calm and gentle, and he loves to be held. He's looking for a quiet home where he can relax and be loved.",
      health: {
        vaccinated: true,
        neutered: true,
        dewormed: true,
        healthIssues: "None",
      },
      temperament: "Calm, Gentle, Affectionate",
      socialBehavior: "Good with kids, Good with other cats",
      diet: "Premium dry food, twice daily",
      favoriteTreats: "Wet food, Freeze-dried chicken treats",
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0 h-full"
        style={{
          backgroundImage: `
        linear-gradient(to right,var(--color-border) 1px, transparent 1px),
        linear-gradient(to bottom,var(--color-border) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />



      {/* Your Content/Components */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl p-4">
        <NavbarMain />

        {/* heading and subheading  */}
        <div className="mt-40 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-5xl font-bold tracking-tight">
            Find Your Perfect <span className="text-chart-1 ">Furry Friend</span>
          </p>
          <p className="tracking-wide text-neutral-500">
            Browse our adoptable pets and give them the loving home they
            deserve.
            <br />
            Every pet deserves a family.
          </p>
        </div>

        {/* search Bar */}
        <SearchBar />

        {/* pet data */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              age={pet.age}
              breed={pet.breed}
              location={pet.location}
              image={pet.image}
              type={pet.type}
            />
          ))}
        </div>
      </div>


      <div className="relative z-10">
        <Footer />
      </div>


    </div>
  );
};

export default Home;
