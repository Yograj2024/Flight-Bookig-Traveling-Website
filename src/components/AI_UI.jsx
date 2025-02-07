import React from 'react';

const AI_UI = () => {
  return (
    <div className="w-[85%] m-auto mx-auto p-4 bg-white shadow-lg rounded-2xl">
      {/* Image Section */}
      <div className="overflow-hidden  rounded-2xl">
        <img 
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAEDAgMFBgQEBgEFAAAAAAEAAgMEEQUSIRMxQVGRBhQiUmGhFVNxgQcyYpIjQkNU0eGiM4KTscH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A8aQN6EoQOaFJbRMCeEDH7lCVO7cocpc4BvFA6nhdNK1gGi7DCqJsLBzVDBaDKGveF0A8DLIB5sAAo+KHFKEAgpUhQMKRO4JCgRCEIFTgmhKgHjRQuGinTHhBUlZcLMqoPRbDgq8sd0HM1MFiVTcLGy36qDesmohsUFUppTjvsmlAiEIQCEIQCEIQWU4Jtk4IHhOtzTWp6BjgtHCqHaOD3DioKKmM0uo0C6qipWxRiwQTU8bY22toh7rpzzbcoygEqRKEDkiVIgaUhSlIgRCEqACVIEqAulOoSICCN7VC4Ky4XULmoKc8V7rKqoN+i3HhU54r3Qc1NHY6BVzotiqh3rMlZYoIUIQgEIQgEIQgtBKEWShA4KVjC9wAUbBqtLDKcvkDiEGthNMGNuf/AEtV7srbApkTREy5UEslyUDnPujMoMyXMgmzBOa5V86c1yCxdIXKPMmucgkLkmZRFybmQTXS5lBnS5kE4IRcKHMjMgmuEXChzIzIJrhNco8yXNdA1wChkAspXlQvKChURA3WVURDVbU25ZtQN6DIkZYqNWZhvVY70AhCEAhCEFtOCalugmhZne0DmuowunDWgkLFwuDM/MukH8GIBAVEw1aqhcmySXddRlyCTMlzKDMlzoJsye1yrZ1I1yCfMmucm5kxzkD82ibmUebRNzIJs6u02FYlVNDqehne08clgfuV0HYCip5p9pKxr5TqxztcovbRb+I4rilJ2mpqGDDnSUUhaDI1hOhOpzbhb1QcO/AsYjaXSYdMAOVj7ArOJLSQ4FrhvBG5el9qavFG08T8ADJ3NkInbFZ5b6Wv1WF21w0/DKfEpIRDUWaJ2tO6/wDuyDkMyXMoA7VOLkEmdGdQ5kZkE+a4Ubk0P1QTcIIZRos+oC0JNypTjQoMuYKm4alXpxvVN6BiEIQCEIQWrqSFud4A11VwYXItDD8IffMeCCzh0YiZmKlnlLjqpzSFrQBdROo3HeSgqOcm5laNE48Sm9xd6oK2ZGZWe4Hml7geaCuHKRjlIKIhPFKQgiLkwuVg0pSGlNkFUuTcysupSk7qUHZdhZ2x11A3i+N1+q6vtb2jg7OyQCamklE9yC0gAAf/AH0XFdkiGVFJqM8T3C/odV6JU1OHTRNZiDYJWsN2iRoNjzQcpTYbF2QwyrxigM9aJWMyQubls0nQu46X3qTE8SbjnYarrXwGJxY7w3vq03uDxGi6Cox/DYmHNIMu7douS7VY/BV4bLT0rrseMug0QcBm1Slyk2Gu9BhCCLMlzJ+zCNmEEZchr0/IE0sAQI46KrONFdABCiljBCDGnG9UZVsTwtVGWJqCihT5GpMjUECFPlbzQg6kVbw4ZmW1V+OvDGCwULcPfI4ue77J5w69vEUEnxG/BNdiHomjDh5ij4cB/MUDXYiRwTm1ksn5WqGppGQszlygZWmNtmtH1QXdvL5Uu2l8qo/EH+UIOIP8oQXdtN5UbabkqPfn+VTUs09VUxU8bCXyODQBvJOiDoOzeC1WPGV4fsaeI2dIW5ru5AJ9ZgjG4q/CqPE2Prw0OEE8To9oP0u1BXqPZ7AGYZgkNJEPGBd55uOpKx+0dFXtiE+FwUj8QgdeI1UdxbiAQRa/1QeUV7augnMFZC6GUfyuG/6c1UNW5euVeHwdosHa3EaeNlQWXdkeHmF/IOH3XltdhYoquWmlPjicWm3H16ILGBVFdJWtioYHTyP/AJW6W9b8Puu9j7M47URh1RW0VLcasZE6Zw/7rtAP2Kp/h4+joqhtCG2nliExcRvvewv9l38htcHgeaDhJuxVfHE/ZYtFO865ainJB++Y26Li8Wpa+jqTS1rNm8a2aND6jmF6PgGMY5WYrV0mMYS2mhjLjHMy9rB1mjXeSNbjoqv4h4f3rA5KuEA1FJ4wbb238Q6a/ZB5oWv8yjkL2C51Ch2sxG4pC+U2zgkIHbV3NG1Kkys42RaP0QR7QppkJUpEfok/h8wgRjr7ynOaCN6YcltCFFmde17/AEQNnjHNUZYxzVuVr+RVOWOTkgquYOaidceqlfHJyTMj+SBlzyKFJlfyQg6MT1Pmel29V5nrT77T/Ni90vfqf5kXugzRNVHcZEbWq4l49StIV1Md7me6q15mnIbFERH6H8yCZrGZAJpWvdxuU0spxxZ1Wd3OoP8ATd1TXUVUd0TuqDRy0/NnVBFP5o1migqvlHqEvw+rP9I9UGhaDg6O67f8NcGinrHYtLGCyC7YLje47z9hcLzj4dVj+keoXq/4YYnBLhIw7M0T0+jmA6n1Qd0al7dQbWTjLHUtyyt1O5wXOdtcMxnEcJZH2ere7VTZQ9xDyzO2x0zDdrY+tlfwaCtp8LpY8TlbNWNjaJpG7nO4lBm/AMNwOvrMUpnSxGdhM0e0/hXvfMG8CvHMcqajEsVq6wMcBK8loHK1h7ALvvxR7TR0QiwyNxMswzShu9rP9kexXn7MRp3t/wCo/wCmVBuYdi7KOaGrniLHQZhtBe2QZT73uvaqfZVdM1+YAlvHcQvCqStgrYY6It2zHvdG+4sWgtJv6cl3+JdppMKwyOKkZtKlsYs29kHXyxtj1c4dVg9oa2nGHVEWZpzMIsDdeeyY1jNaxz66o2b/ACsd4WrIkqaimp5Zaiu2xk8LANGhBAKyJzRqNyaaqLn7Kq2imDRlykW5o7nLxy9UDpXNlkGzNyjYuy+vJDKWVrg4Fot6qR9Y2Nxa4ahBDsnjh7o2TzwHVSd+Z5T7JDWst+UoIti/kOqGskYbi1vqnd8Z5CkNWzyFA909hY71WlnanPqWPBBYoREJW3Dh/hBBJM1RbcKZ9KfOFEaXT8w6IE24Qju36/ZIg3/hmIf2snsgYXX8aWT2/wArrMz/ADDqqGKV76OLLGSZXbgNcvqgyaCnZDOXVr443MNhG92t/Wy1O+0trioh15O/0udIeX3OZxOrjZNcx9/yu6IOjNbTf3EfUpjq2l41MfUrng14B8B6JpY7fld0QdF36l/uo/8Akm97o/7uP/kueDH3/I7okayTyP8A2lBvunjkY5tNKySYtORjQRc25lZ9FT4xh9bDWUJdFNEdHB7dRyOuo9FPgFPZ75nANsMrc3VdLQUr6l4yvaBfeLIOqwftu7ZRjFqGaOS2skTQ9vQG4VvFu2lJTUr30kNRPLa7WCIt1+pAsqdJQxwtF3gm3EhFVSxyxkB7dfUIPJsRp8Wxavmrq1t5Zjc3eDYcANdwUTcJqm6Ni14+ILrq2J1PK9rphofOFSe9nGYf+RBi0tDidLUielGWTdYuFiPVaNZLUVpyVs7qWQEZxG69/utClEPhJlZ4j51n45R3qi6MFzSAbsFwgkq+6SUfd3XcwAXzFxv9bb1jSw0rnNbLUSFrRZsbGZWj6Kd0cj4MmST9pUEsEhjvkeSP0lBOKulYA1pfYaC4SGspv19FnbKX5b/2lJspflv/AGlBoGup91n2+ir1D46mRoiu127xaAqvsZflP/aUCKcG4jfcajwlBN3SXzM6lHdZPOD1VtszMjdq/I8jVruCQzw/Magpmlk5j3SGlfzCtmog84TDUw8Hjqgq91eeI6JWQvY4FrxpvFlOamHzjqm94i4PHVBDUS7P88Z+vNVnVLfllXJJYZG5XOas98DnPOz8X0QP7y3yHqhRd2n+UhB0NDSy1kuzjGh3uHBdXT0jKaFscbSA0dVzVPiLqMObTtAaTx3qX45VHTwoOjyHk7qjZniD1XN/Gqr0R8aquYQdGYr/AMvumGIcR7rnTjVSeSYcZqv09EHSbIch1TTGAL5h1XNHGan9PRWKKsqK6ZsHhDT+awQZuJSietlfvbewA9Fv9lmN2YIAGu9SOwGjv+V2vqtvAsIpY/C1ruqBK2QxxjLv3aIpyXQszaaaroXYTSvAJa5MOGUzGAWOnqg4LtFSNkeZGsG5ctI0A5bCy9TxHDaV4N2ncuWmwak2p8DkGLTjRnIartcKpBLRubuNgVTpMFpS5gynqt+WJuHwNMIOosboMo0gaCMyrSQtbG67uHJSOrZC927os/Ea+ZkTrEdEFRz2DQOPRMc9vM9FjvxCcneOiZ3+fmOiDYJbzPRNLm8z0WQa6fmOiDXVHnHRBar4hIwPZfO304LLJVl1bOWkZvZWaOKCoju6MZhvQZRKbdbxoqfyBRmig8gQYt9EBbJo4fKmmkh8qDIQHFpuCtXusXlTTTR+UIKHeTyCFe7tH5QhArTcH6pw3oQgUoQhAxNKVCBq3OyzRnc+3ishCDoi4q9RSOZKMp4oQg32SuLBcqtUyOHHghCDMqZHG9zwWNI450IQaGG6uCuYq492KEIOYBOdyysTccr9UIQYJSIQgU7kIQgarGHvc2osDokQg23BRuQhAwqMoQgaUwoQgahCEH//2Q==" 
          alt="Aquarium with Goldfish" 
          className="w-full h-[400px] object-cover" 
        />
      </div>

      {/* Title */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-800">Aquarium Overview</h1>
      </div>

      {/* Description */}
      <div className="mt-2">
        <p className="text-gray-600">
          Welcome to your aquarium dashboard. Here you can monitor and manage your aquarium settings, fish health, and environment.
        </p>
      </div>

      {/* Subheading */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-700">Travel Advice</h2>
      </div>

      {/* Status Cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-2xl shadow-sm text-center">
          <p className="text-lg font-medium text-gray-700">Water Temp</p>
          <p className="text-xl font-bold text-blue-500">24°C</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-2xl shadow-sm text-center">
          <p className="text-lg font-medium text-gray-700">pH Level</p>
          <p className="text-xl font-bold text-green-500">7.2</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-2xl shadow-sm text-center">
          <p className="text-lg font-medium text-gray-700">Fish Count</p>
          <p className="text-xl font-bold text-orange-500">12</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-600 transition">
          Update Settings
        </button>
      </div>
    </div>
  );
};

export default AI_UI; 


// import React from 'react';

// const AI_UI = () => {
//   return (
//     <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-2xl">
//       {/* Section 1 */}
//       <div className="mb-6">
//         {/* Title */}
//         <div className="w-24 h-6 bg-gray-200 rounded-full mb-2"></div>

//         {/* Main Image */}
//         <div className="overflow-hidden rounded-2xl">
//           <img 
//             src="https://via.placeholder.com/400x200" 
//             alt="Scenic View" 
//             className="w-full h-40 object-cover" 
//           />
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4 mt-2">
//           <button className="text-gray-600 hover:text-blue-500">
//             <i className="far fa-thumbs-up"></i>
//           </button>
//           <button className="text-gray-600 hover:text-blue-500">
//             <i className="far fa-comment"></i>
//           </button>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 mt-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
//         </p>

//         {/* Small Images */}
//         <div className="flex space-x-2 mt-2">
//           <img src="https://via.placeholder.com/100" alt="Thumbnail 1" className="w-1/2 h-20 object-cover rounded-lg" />
//           <img src="https://via.placeholder.com/100" alt="Thumbnail 2" className="w-1/2 h-20 object-cover rounded-lg" />
//         </div>

//         {/* Button */}
//         <div className="mt-2">
//           <button className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-600 transition">
//             Try now
//           </button>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div>
//         {/* Title */}
//         <div className="w-24 h-6 bg-gray-200 rounded-full mb-2"></div>

//         {/* Main Image */}
//         <div className="overflow-hidden rounded-2xl">
//           <img 
//             src="https://via.placeholder.com/400x200" 
//             alt="Scenic View" 
//             className="w-full h-40 object-cover" 
//           />
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4 mt-2">
//           <button className="text-gray-600 hover:text-blue-500">
//             <i className="far fa-thumbs-up"></i>
//           </button>
//           <button className="text-gray-600 hover:text-blue-500">
//             <i className="far fa-comment"></i>
//           </button>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 mt-2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
//         </p>

//         {/* Small Images */}
//         <div className="flex space-x-2 mt-2">
//           <img src="https://via.placeholder.com/100" alt="Thumbnail 3" className="w-1/2 h-20 object-cover rounded-lg" />
//           <img src="https://via.placeholder.com/100" alt="Thumbnail 4" className="w-1/2 h-20 object-cover rounded-lg" />
//         </div>

//         {/* Button */}
//         <div className="mt-2">
//           <button className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-600 transition">
//             Try now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AI_UI;
