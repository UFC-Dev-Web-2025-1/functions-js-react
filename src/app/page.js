import styles from "./page.module.css";

function FuncaoTradicionalComponente() {
    return (
        <>
            <h1>Função Tradicional</h1>
            <p>
                Possui um nome e apresenta as palavras <code>function</code> e{" "}
                <code>return</code>.
            </p>
            <pre>
                <code>
                    <p>{"function FuncaoTradicionalComponente() {"}</p>
                    <p>{"    return ("}</p>
                    <p>{"        <> "}</p>
                    <p>{"            <h1>Função Tradicional</h1>"}</p>
                    <p>{"            <p>Este é uma função tradicional.</p>"}</p>
                    <p>{"        </> "}</p>
                    <p>{"    );"}</p>
                    <p>{"}"}</p>
                </code>
            </pre>
        </>
    );
}

const FuncaoAnonimaComponente = function () {
    return (
        <>
            <h1>Função Anônima</h1>
            <p>Não tem um nome. Neste caso ela foi atribuída à uma variável.</p>
            <pre>
                <code>
                    <p>{"const FuncaoAnonimaComponente = function () {"}</p>
                    <p>{"    return ("}</p>
                    <p>{"        <> "}</p>
                    <p>{"            <h1>Função Anônima</h1>"}</p>
                    <p>{"            <p>Este é uma função anônima.</p>"}</p>
                    <p>{"        </> "}</p>
                    <p>{"    );"}</p>
                    <p>{"}"}</p>
                </code>
            </pre>
        </>
    );
};

const ArrowFunctionComponente = () => {
    return (
        <>
            <h1>Arrow Function</h1>
            <p>
                Estilosa! Tem uma setinha. Além de não mostrar o nome, não
                mostra <code>function</code>.
            </p>
            <pre>
                <code>
                    <p>{"const ArrowFunctionComponente = () => {"}</p>
                    <p>{"    return ("}</p>
                    <p>{"        <> "}</p>
                    <p>{"            <h1>Arrow Function</h1>"}</p>
                    <p>
                        {
                            "            <p>Este é um componente com arrow function.</p>"
                        }
                    </p>
                    <p>{"        </> "}</p>
                    <p>{"    );"}</p>
                    <p>{"}"}</p>
                </code>
            </pre>
        </>
    );
};

const ArrowFunctionMinimaComponente = () => (
    <>
        <h1>Arrow Function One Instruction</h1>
        <p>
            Aqui é que nem o que desejamos gastar no fim do mês: um tico. Não nome, não
            mostra nem <code>function</code> nem <code>return</code>.
        </p>
        <pre>
            <code>
                <p>{"const ArrowFunctionMinimaComponente = () => ("}</p>
                <p>{"    <> "}</p>
                <p>{"        <h1>Arrow Function One Instruction</h1>"}</p>
                <p>
                    {
                        "        <p>Este é um componente com arrow function só um tico.</p>"
                    }
                </p>
                <p>{"    </> "}</p>
                <p>{");"}</p>
            </code>
        </pre>
    </>
);

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {FuncaoTradicionalComponente()}
                {FuncaoAnonimaComponente()}
                {ArrowFunctionComponente()}
                {ArrowFunctionMinimaComponente()}
                <p>-----------------</p>
                <FuncaoTradicionalComponente />
            </main>
        </div>
    );
}
