import React, { useState } from "react";
import { useRef } from "react";
function App() {
  const linkRef = useRef(null);
  function goto(ref) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="App">
      <button onClick={() => goto(linkRef.current)}>scroll</button>
      <p>
        Lorem ipsuasdm dolor sit amet consectetur adipisicing elit. Unde, minus natus. Soluta odit sit velit deserunt excepturi sunt animi nemo laboriosam natus magnam
        dolorem, ad cupiditate itaque beatae eligendi! Necessitatibus sunt eaque nobis aperiam perspiciatis sint, facilis, alias voluptate facere odit accusantium
        distinctio doloremque beatae voluptates exercitationem dicta explicabo. Eligendi eos consectetur necessitatibus, debitis quaerat odio rerum perferendis doloribus
        totam, aut, perspiciatis soluta molestias inventore enim quo error minima quia consequatur sapiente optio! Cum itaque quaerat ullam vel optio a quibusdam amet!
        Omnis maxime quo odio voluptate suscipit eum, tempora eligendi libero a porro quas commodi mollitia, perspiciatis fugit tempore quis consectetur ducimus
        blanditiis similique voluptatibus nesciunt iste! Quam nobis aut provident quo numquam, debitis consequuntur enim quibusdam et voluptatem ducimus ratione
        similique vero dolorum minus inventore unde dolor non quae obcaecati at nisi! Nam, a quos! Quia consectetur eligendi veniam fuga dicta facilis voluptatum dolorem
        suscipit dolores voluptatem? Error, blanditiis. Culpa ipsam accusamus sapiente, repellat voluptas ut deserunt iure asperiores non distinctio! Sequi officia
        corporis necessitatibus placeat, consequuntur dolores nisi ut nesciunt doloremque qui numquam, laboriosam incidunt! Magni animi assumenda, illum reiciendis quas,
        dolorum quo veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores debitis temporibus asperiores illo optio et facilis nulla. Veniam
        error doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam
        suscipit labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea
        aspernatur impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo
        at odio quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque perferendis similique vitae
        obcaecati ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui vero dignissimos! Qui nam, reprehenderit illo rem odit ab
        obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod eveniet harum atque similique quisquam repudiandae voluptas
        dolores velit doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati repellat delectus consequatur optio quaerat sequi? Esse at
        praesentium temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus consequatur quo tempore recusandae exercitationem alias non sint
        consectetur obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat,
        impedit quos. Aliquam soluta aspernatur illo error repellendus dolorum sed.o veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores
        debitis temporibus asperiores illo optio et facilis nulla. Veniam error doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas
        laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam suscipit labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid
        labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea aspernatur impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit
        obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo at odio quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos,
        delectus labore deleniti. Itaque eaque perferendis similique vitae obcaecati ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui
        vero dignissimos! Qui nam, reprehenderit illo rem odit ab obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod
        eveniet harum atque similique quisquam repudiandae voluptas dolores velit doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati
        repellat delectus consequatur optio quaerat sequi? Esse at praesentium temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus
        consequatur quo tempore recusandae exercitationem alias non sint consectetur obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum,
        voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat, impedit quos. Aliquam soluta aspernatur illo error repellendus dolorum sed.o veritatis nemo
        iste commodi accusamus eligendi iusto eaque perspiciatis, maiores debitis temporibus asperiores illo optio et facilis nulla. Veniam error doloribus sed nemo
        dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam suscipit labore aliquam quis
        laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea aspernatur impedit adipisci
        facere libero animi accusantium qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo at odio quaerat expedita
        quas molestias cum sapiente iusto amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque perferendis similique vitae obcaecati ipsum sapiente maxime
        doloribus animi mollitia, esse fugit, possimus at deserunt qui vero dignissimos! Qui nam, reprehenderit illo rem odit ab obcaecati quo. Similique, animi. Est
        eius temporibus, numquam quibusdam eaque fugit recusandae quod eveniet harum atque similique quisquam repudiandae voluptas dolores velit doloribus mollitia. Quis
        natus quas officiis cumque, voluptatibus, culpa ad obcaecati repellat delectus consequatur optio quaerat sequi? Esse at praesentium temporibus exercitationem,
        voluptatibus impedit deserunt hic. A ratione temporibus consequatur quo tempore recusandae exercitationem alias non sint consectetur obcaecati eius provident
        necessitatibus nihil quidem libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat, impedit quos. Aliquam soluta aspernatur
        illo error repellendus dolorum sed.o veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores debitis temporibus asperiores illo optio et
        facilis nulla. Veniam error doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem
        voluptates aperiam suscipit labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia,
        incidunt fuga ea aspernatur impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi
        voluptatem quae illum nemo at odio quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque
        perferendis similique vitae obcaecati ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui vero dignissimos! Qui nam,
        reprehenderit illo rem odit ab obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod eveniet harum atque similique
        quisquam repudiandae voluptas dolores velit doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati repellat delectus consequatur
        optio quaerat sequi? Esse at praesentium temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus consequatur quo tempore recusandae
        exercitationem alias non sint consectetur obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor.
        Facere, reiciendis? Fugiat, impedit quos. Aliquam soluta aspernatur illo error repellendus dolorum sed.o veritatis nemo iste commodi accusamus eligendi iusto
        eaque perspiciatis, maiores debitis temporibus asperiores illo optio et facilis nulla. Veniam error doloribus sed nemo dolorum voluptatum neque voluptas
        nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam suscipit labore aliquam quis laboriosam fugit! Ipsa itaque
        iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea aspernatur impedit adipisci facere libero animi accusantium
        qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo at odio quaerat expedita quas molestias cum sapiente iusto
        amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque perferendis similique vitae obcaecati ipsum sapiente maxime doloribus animi mollitia, esse
        fugit, possimus at deserunt qui vero dignissimos! Qui nam, reprehenderit illo rem odit ab obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam
        eaque fugit recusandae quod eveniet harum atque similique quisquam repudiandae voluptas dolores velit doloribus mollitia. Quis natus quas officiis cumque,
        voluptatibus, culpa ad obcaecati repellat delectus consequatur optio quaerat sequi? Esse at praesentium temporibus exercitationem, voluptatibus impedit deserunt
        hic. A ratione temporibus consequatur quo tempore recusandae exercitationem alias non sint consectetur obcaecati eius provident necessitatibus nihil quidem
        libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat, impedit quos. Aliquam soluta aspernatur illo error repellendus
        dolorum sed.o veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores debitis temporibus asperiores illo optio et facilis nulla. Veniam
        error doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam
        suscipit labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea
        aspernatur impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo
        at odio quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque perferendis similique vitae
        obcaecati ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui vero dignissimos! Qui nam, reprehenderit illo rem odit ab
        obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod eveniet harum atque similique quisquam repudiandae voluptas
        dolores velit doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati repellat delectus consequatur optio quaerat sequi? Esse at
        praesentium temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus consequatur quo tempore recusandae exercitationem alias non sint
        consectetur obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat,
        impedit quos. Aliquam soluta aspernatur illo error repellendus dolorum sed.o veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores
        debitis temporibus asperiores illo optio et facilis nulla. Veniam error doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas
        laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam suscipit labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid
        labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea aspernatur impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit
        obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo at odio quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos,
        delectus labore deleniti. Itaque eaque perferendis similique vitae obcaecati ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui
        vero dignissimos! Qui nam, reprehenderit illo rem odit ab obcaecati quo. Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod
        eveniet harum atque similique quisquam repudiandae voluptas dolores velit doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati
        repellat delectus consequatur optio quaerat sequi? Esse at praesentium temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus
        consequatur quo tempore recusandae exercitationem alias non sint consectetur obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum,
        voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat, impedit quos. Aliquam soluta aspernatur illo error repellendus dolorum sed.
      </p>
      <h1 ref={linkRef}>INI DIA CUY!!!</h1>
      <p>
        o veritatis nemo iste commodi accusamus eligendi iusto eaque perspiciatis, maiores debitis temporibus asperiores illo optio et facilis nulla. Veniam error
        doloribus sed nemo dolorum voluptatum neque voluptas nesciunt! Molestiae voluptas laudantium ad eos placeat quasi odit. Nam, quidem voluptates aperiam suscipit
        labore aliquam quis laboriosam fugit! Ipsa itaque iusto cum odio eligendi aliquid labore? Consectetur odit voluptates excepturi quia, incidunt fuga ea aspernatur
        impedit adipisci facere libero animi accusantium qui nulla voluptatibus suscipit obcaecati. Tempora est laboriosam ex sequi voluptatem quae illum nemo at odio
        quaerat expedita quas molestias cum sapiente iusto amet blanditiis dignissimos, delectus labore deleniti. Itaque eaque perferendis similique vitae obcaecati
        ipsum sapiente maxime doloribus animi mollitia, esse fugit, possimus at deserunt qui vero dignissimos! Qui nam, reprehenderit illo rem odit ab obcaecati quo.
        Similique, animi. Est eius temporibus, numquam quibusdam eaque fugit recusandae quod eveniet harum atque similique quisquam repudiandae voluptas dolores velit
        doloribus mollitia. Quis natus quas officiis cumque, voluptatibus, culpa ad obcaecati repellat delectus consequatur optio quaerat sequi? Esse at praesentium
        temporibus exercitationem, voluptatibus impedit deserunt hic. A ratione temporibus consequatur quo tempore recusandae exercitationem alias non sint consectetur
        obcaecati eius provident necessitatibus nihil quidem libero sit quis dolorum, voluptatem vel nobis commodi sunt dolor. Facere, reiciendis? Fugiat, impedit quos.
        Aliquam soluta aspernatur illo error repellendus dolorum sed.
      </p>
    </div>
  );
}

export default App;
