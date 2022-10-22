<template>
    <div class="historial">
        <h2 class="titulo-home"><b>HISTORIAL DE REPORTES</b></h2>
        <div>
            <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column-p field="name" header="Reportes" :expander="true"></Column-p>
            </TreeTable>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Historial-page',
        data() {
        return {
            nodes: null,
            rows: 5,
            loading: false,
            totalRecords: 0
        }
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 10;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = {...node};

                    lazyNode.children = [
                        {
                            data: {
                                name: 'Fecha de creación: ' + (Math.floor(Math.random() * 29)+1) + '/' + (Math.floor(Math.random() * 11)+1) + '/2022'
                            },
                        },
                        {
                            data: {
                                name: 'Monto del leasing: S/' + Math.floor(Math.random() * 5000),
                            }
                        },
                        {
                            data: {
                                name: 'Descripcion: ' + 'Aquí el usuario pone la descripción del leasing',
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: {
                        name: 'Reporte ' + (first + i + 1),
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }
    }
    }
</script>

<style focused>
    .titulo-home {
        color: #fb8c00;
    }
    .historial {
        width: 50%;
        margin: auto;
    }
</style>