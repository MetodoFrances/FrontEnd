<template>
    <div>
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column-p field="name" header="Historial de registros" :expander="true"></Column-p>
        </TreeTable>
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
            this.totalRecords = 5;
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
    
</style>