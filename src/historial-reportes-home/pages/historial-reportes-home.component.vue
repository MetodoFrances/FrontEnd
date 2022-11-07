<template>
    <div class="historial">
        <h2 class="titulo-home"><b>HISTORIAL DE REPORTES</b></h2>
        <div>
            <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <pv-column field="name" header="Reportes" :expander="true"></pv-column>
            </TreeTable>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Historial-page',
        data() {
        return {
            reports: [],
            nodes: null,
            rows: 0,
            loading: false,
            totalRecords: 0
        }
    },
    created() {
        axios.get('http://localhost:3000/reports')
        .then(response => {
            this.reports = response.data;
        })
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.rows = this.reports.length;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = this.reports.length;
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
                                name: 'Fecha de creación: ' + this.reports[node.key].date,
                            },
                        },
                        {
                            data: {
                                name: 'Monto del leasing: S/' + this.reports[node.key].amount,
                            }
                        },
                        {
                            data: {
                                name: 'Descripcion: ' + this.reports[node.key].description,
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
                        name: 'Reporte ' + this.reports[i].name
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