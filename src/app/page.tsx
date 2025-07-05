"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* Homepage Title */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Borlói Rudolf</h1>
        <p className="text-xl">(1927 - 2019)</p>
      </header>

      {/* Section 1 */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Lorem Ipsum - Section 1</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Lorem Ipsum - Section 2</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Lorem Ipsum - Section 3</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Lorem Ipsum - Section 4</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </div>
    </main>
  );
}
