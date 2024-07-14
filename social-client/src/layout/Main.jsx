import Navbar from "../components/Navbar/Navbar";
import SameShape from "../components/SameShape/SameShape";
import avatar from "../assets/images/sadi avatr.jpg";
import { Link } from "react-router-dom";
import Sideabr from "../components/Sideabr/Sideabr";
import Feed from "../components/Feed/Feed";
import Widget from "../components/Widget/Widget";
const Main = () => {
  return (
    <div className="w-full bg-slate-100  h-screen overflow-hidden">
      <Navbar />
      <div className="px-0 lg:px-10  2xl:px-40 lg:rounded-lg h-screen">
        <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full mt-16">
          {/* LEFT */}
          <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
            <div>
              <Sideabr />
            </div>
          </div>

          {/* CENTER */}
          <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto no-scrollbar rounded-lg">
            <h3>Pos Area</h3>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate laudantium, excepturi odit earum temporibus porro
                similique voluptatum quo esse modi praesentium deleniti dolore
                debitis provident adipisci cupiditate eum facere ullam
                consequatur hic odio impedit magnam. Dolores doloribus porro,
                nemo rem incidunt voluptatem eum tenetur at ut quis doloremque.
                Dolor labore architecto nobis eligendi excepturi unde veniam
                maxime quas! Veniam aut commodi ea possimus magnam, eius nostrum
                asperiores a enim mollitia dolorem quae nulla laboriosam saepe,
                expedita perferendis. Quas, ex aliquam? Dignissimos voluptas
                laudantium nam est eaque, vel cumque fuga labore veniam sed
                delectus eos aspernatur nisi maxime earum quis distinctio?
              </p>
            </div>
          </div>

          {/* RIGJT */}
          <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto">
            <h3>Right Side</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;