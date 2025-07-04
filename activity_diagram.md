```mermaid
graph TD
    start((Inicio)) --> Home[Página de Inicio (index.html)]

    Home --> Blog[Página de Blog (blog.html)]
    Home --> Work[Página de Trabajos (work.html)]
    Home --> About[Página Acerca de (about.html)]

    Blog --> Post[Ver Artículo de Blog (posts/...)]
    Work --> Project[Ver Proyecto (works/...)]

    About --> ContactForm[Formulario de Contacto]
    ContactForm --> SubmitForm{Enviar Formulario}
    SubmitForm -- Éxito --> FormSuccess[Mensaje de Éxito]
    SubmitForm -- Fallo --> FormError[Mensaje de Error]

    Work --> Pagination1[Paginación (work.html)]
    Pagination1 --> Work2[Página de Trabajos 2 (work2.html)]
    Work2 --> Pagination2[Paginación (work2.html)]
    Pagination2 --> Work

    Home -- Clic en "Mis Proyectos" --> Work
    Home -- Clic en "Acerca de" --> About
    Home -- Clic en "Github" --> GithubExternal[GitHub (Enlace Externo)]

    style Home fill:#f9f,stroke:#333,stroke-width:2px
    style Blog fill:#f9f,stroke:#333,stroke-width:2px
    style Work fill:#f9f,stroke:#333,stroke-width:2px
    style About fill:#f9f,stroke:#333,stroke-width:2px
    style Post fill:#f9f,stroke:#333,stroke-width:2px
    style Project fill:#f9f,stroke:#333,stroke-width:2px
    style ContactForm fill:#f9f,stroke:#333,stroke-width:2px
    style FormSuccess fill:#9f9,stroke:#333,stroke-width:2px
    style FormError fill:#f99,stroke:#333,stroke-width:2px
    style Pagination1 fill:#f9f,stroke:#333,stroke-width:2px
    style Pagination2 fill:#f9f,stroke:#333,stroke-width:2px
    style GithubExternal fill:#f9f,stroke:#333,stroke-width:2px
```