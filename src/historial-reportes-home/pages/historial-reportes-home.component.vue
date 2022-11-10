<template>
    <div class="historial">
        <h2 class="titulo-home"><b>LISTA DE LOANS</b></h2>
        <div>
            <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <pv-column field="name" header="Loans" :expander="true"></pv-column>
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
            loans: [],
            nodes: null,
            rows: 0,
            loading: false,
            totalRecords: 0
        }
    },
    created() {
        axios.get('http://localhost:3000/loans')
        .then(response => {
            this.loans = response.data;
        })
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.rows = this.loans.length;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = this.loans.length;
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
                                name: 'Fecha de creación: ' + this.loans[node.key].loan_issue_date,
                            },
                        },
                        {
                            data: {
                                name: 'Monto del leasing: S/' + this.loans[node.key].leasingAmount,
                            }
                        },
                        {
                            data: {
                                name: 'Número de cuotas: ' + this.loans[node.key].totalInstallments,
                            }
                        },
                        {
                            data: {
                                name: 'Duración: ' + this.loans[node.key].loan_time,
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
                        name: 'Identificador: ' + this.loans[i].loan_name
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