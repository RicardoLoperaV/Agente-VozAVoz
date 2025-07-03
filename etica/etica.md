# Ética


El objetivo del presente documento es establecer un (primer) marco ético para el proyecto, basado una *muy corta* revisión de la literatura. Lo que se busca no es responder todas las preguntas éticas y morales que puedan surgir, sino parar el proyecto sobre una cierta teoría ética. Por lo tanto el presente documento tiene una labor de "primer paso" hacia un marco ético más robusto y pertinente, lo que implica que lo aquí escrito debe ser (y será) modificado a lo largo del desarrollo del proyecto y de la evolución de la tecnología, ya que el discurso ético de la inteligencia artificial ha carecido de retroalimentación de la realidad, especialmente en lo que concierne a sistemas de inteligencia artificial agénticos y autónomos. 

Es importante tener una base ética para el proyecto ya que el enfoque de este es una población especialmente vulnerable: adultos mayores. Aunque el sistema de momento se concibe solo como un agente conversacional, la misión del proyecto es aumentar sus capacidades, hasta llegar a un sistema, o sistemas, que puedan brindar cuidado inteligente a la población de adultos mayores, y alivianar la carga de trabajo de los cuidadores. 

## Taxonomía de riesgos

La ética del proyecto será analizada en términos de _riesgos_. En general, podemos definir un riesgo como el impacto de la incertidumbre sobre los objetivos del sistema [2]. El marco ético sobre el que se para el proyecto se basa en la taxonomía de riesgos propuestos por Steimers y Schneider [1]. Esta taxonomía divide los riesgos en 8 categorías. Para cada categoría, damos un objetivo específico que el sistema debe cumplir.

### 1. Equidad

La equidad consiste en el tratar a cada persona por igual, a menos de que haya una justificación objetiva para un tratamiento diferenciado. Debido a que la población con la que se está tratando consiste de adultos mayores de Medellín, debemos procurar que el sistema no haga discriminaciones injustas sobre el geénero, las creencias, o orientaciones sexuales particulares. Para lograr esto, es necesario procurar que los conjuntos de datos bajo los cuales el sistema sea entrenado o ajustado no contengan sesgos que afecten la manera en la que el sistema interactua con los adultos mayores. 

### 2. Privacidad

La privacidad está relacionada con la habilidad de los individuos para controlar o influenciar que información relacionada con ellos puede ser recolectada, como puede ser usada, y por quienes. Este punto es crucial, ya que pretendemos que la primera fase del sistema juegue un papel de recolección de datos conversacionales, con el fin de crear modelos más capaces para lidiar con el contexto de los adultos mayores en Medellín. Los adultos mayores deben estar completamente informados de este proceso de recolección de datos, y será necesario que firmen consentimientos informados, en los que se especifique de manera clara y precisa de que manera se van a utilizar los datos recolectados. Más aún, es importante que estos datos estén completamente anonimizados, y que de ellos solo se conserve aquello que sea esencial para el entrenamiento de futuros sistemas. 

### 3. Autonomía

La autonomía se refiere a la capacidad del sistema de funcionar independientemente del control y la supervisión humana. Probablemente este sea el punto ético más delicado, y al cual se debe prestar más atención, ya que el proyecto se enmarca precisamente en el uso de sistemas agénticos. La autonomía del sistema, en su primera fase, viene dada por su capacidad de conversar de manera natural con los adultos mayores, de recordar conversaciones pasadas, y de juzgar, en el momento de la conversación, que se debería decir. Esto presenta un reto, ya que especificar que es una conversación "natural", que es lo que se debe decir y lo que no, es algo extremadamente dificil. Este problema se abordará mediante un ajuste fino, por ejemplo, aprendizaje reforzado con feedback humano, para "alinear" el modelo hacia los valores y las conductas que debe tener. Sin embargo este proceso no es fácil, y será necesario monitoreo continuo y tests exhaustivos para lograr que la autonomía del sistema no entre en conflicto con la salud de los adultos mayores. 

Por otro lado, la autonomía presenta riesgos aún más complejos de abordar. El paradigma agéntico de la inteligencia artificial pretende evolucionar hacia sistemas que razonan, hacen planes, subplanes, y se autoimponen subobjetivos para lograr su objetivo principal, el cual muchas veces no es claro cual es realmente. Muchos de estos sistemas encuentran formas creativas e ingeniosas de lograr su objetivo principal, formas que a veces se escapan de lo que los desarrolladores habían planeado originalmente. El ejemplo clásico es el de una IA que, para no perder jugando Tetris, decide entrar a la pantalla de pausa y quedarse allí indefinidamente. Es crucial que el sistema que desarrollemos no escoja estrategias que entren en conflicto con el bienestar de los adultos mayores. Para esto necesitamos esperar a que se desarrollen técnicas que impidan en primer lugar la creación de tales estrategias, y de sistemas que sean capaces de identificar cuando se están dando estás conductas problemáticas. 

### 4. Complejidad de la tarea y del entorno

El potencial de la IA radica en su uso en tareas para las cuales no existen alternativas tecnológicas clásicas. Tales tareas suelen estar caracterizadas por un alto grado de complejidad. Esta complejidad da lugar a un cierto nivel de incertidumbre en el sistema. En nuestro proyecto, la complejidad de la tarea es clara: conversar con adultos mayores, de una manera amena y que aumente su calidad de vida. Para abordar este riesgo, es necesario adquirir una perspectiva amplia e informada del contexto en el que se encuentran estas personas, y la mayor cantidad de situaciones inesperadas que se puedan presentar. Por ejemplo, si el adulto mayor decide salir del lugar en el que se encuentra ubicado, para ir a la calle, y le comenta su objetivo al agente conversacional, ¿Que debería hacer el sistema? Una buena solución sería que el sistema llamará inmediatamente a un cuidador. ¿Que pasa si el cuidador no responde y el adulto mayor está a punto de salir? ¿El agente conversacional debería intentar convencer al adulto mayor de que se quede? ¿Hasta que punto está en juego la propia autonomía del adulto mayor? Se podrían generar más situaciones, que llevan a más preguntas éticas. El punto crucial es reconocer la existencia de una alta variedad de situaciones, y en proponer estrategias para abordar esta complejidad. 

### 5. Explicabilidad y transparencia

Usualmente los terminos explicabilidad y transparencia se intercambian y se usan de la misma forma, pero es importante hacer una distinción.
La transparencia se refiere a la información sobre el sistema que es comunicada a los usuarios pertinentes, en este caso, adultos mayores y cuidadores. Por otro lado, la explicabilidad se refiere a la propiedad del sistema de expresar que factores influyeron en la toma de una decisión, o en una salida de este. Es necesario asegurar que el sistema que proponemos sea transparente: explicar de manera clara y detallada el hecho de que es un IA, cual es su propósito, cuales son sus fortalezas, sus debilidades, y que el propio sistema pueda dar una cuenta detallada de su propósito. También es necesario que el sistema sea explicable. Sin embargo, esto es dificil, ya que para sistemas de redes neuronales, aún se carece de herramientas que abran "la caja negra", y permitan trazar rutas explicativas para las decisiones del sistema. Debemos aplicar estas herramientas en el momento en el que sean lo suficientemente maduras para explicar las decisiones que toman los sistemas más avanzados. 


### 6. Seguridad

Para asegurar la seguridad del sistema de IA, requirimientos tradicioanles de seguridad en IT deben ser considerados. Por ejemplo, el ISO/IEC 27001, ISO/IEC 18045, y ISO/IEC 62444. Sin embargo, los sistemas de inteligencia artificial vienen con desafíos específicos que deben ser abordados. Una clase de ataques potencialmente problemático es el de *un ataque adversario*, en el que un atacante intenta manipular el sistema para modificar su salida, u obtener información sobre él modelo que no estaría normalmente accesible. Para mitigar este riesgo, debemos crear un sistema robusto, que reconozca cuando está siendo atacado o manipulado, e informe rapidamente a un humano sobre esto (por ejemplo, los cuidadores), además de implementar técnicas clásicas de seguridad en sistemas de IT. 

### 7. Hardware 

Claramente, el sistema necesita un hardware sobre el que apoyarse. Este punto aún requiere de consideración, ya que el sistema puede estar implementado en celulares, computadores, o en un dispositivo. Dependiendo de donde esté implementado, el sistema será más accesible o no para los usuarios. No todos los adultos mayores tienen un celular, y no todos los sitios de cuidado tienen acceso a un computador, o incluso a internet. Debemos pensar cuidadosamente como será la puesta en marcha del software, para poder abarcar a la mayor cantidad de usuarios, y pensar en aquellos usuarios que puedan no contar con el hardware necesario para el funcionamiento del sistema. 


### 8. Madurez tecnológica

El nivel de madurez tecnológica describe que tan madura y libre de rrores es una cierta tecnología a la hora de ser aplicada en un contexto. Dado que los sistemas agénticos están en su infancia, la madurez de la tecnología a utilizar es poca. Esto conlleva a alucinaciones, las cuales pueden tener consecuencias desastrosas en el contexto de los adultos mayores, ya que una sola alucinación podría propagarse hasta infectar toda la memoria del sistema. Debemos esperar a que los sistemas agénticos mejoren sus capacidades, y que se desarrollen técnicas en el campo del machine learning que mitiguen fuertemente la tendencia de los modelos a alucinar. 

## Conclusión

Estos 8 riesgos y las consideraciones plantedas establecen un primer marco ético para el proyecto. Como se escribió anteriormente, este marco está lejos de ser un marco definitivo, y su proposito es dar unas primeras bases sobre los riesgos existentes en el proyecto, y como podrían ser abordados. Es *completamente necesario* tener un marco ético robusto antes de poner en producción el proyecto. 

## Bibliografía

[1] Sources of Risk of AI Systems, Steimers A, Schenider M. 2018

[2] ISO 31000; Risk Management-Guidelines. International Organization for Standardization: Geneva, Switzerland, 2018.

