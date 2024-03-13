<template>
    <div class="pagination">
        <button>上一页</button>
        <button v-show="pageNo != 1">1</button>
        <button v-show="pageNo > 4">···</button>
        <button v-show="pageNo > 3">{{ pageNo - 2 }}</button>
        <button v-show="pageNo > 2">{{ pageNo - 1 }}</button>
        <button class="curPage" style="background-color: orange">
            {{ pageNo }}
        </button>
        <button v-show="totalPage - pageNo > 1">{{ pageNo + 1 }}</button>
        <button v-show="totalPage - pageNo > 2">{{ pageNo + 2 }}</button>
        <button v-show="totalPage - pageNo > 3">···</button>
        <button v-show="totalPage - pageNo >= 1">{{ totalPage }}</button>
        <button>下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        startNumAndEndNum() {
            let startNum = 0,
                endNum = 0;
            let eachSize = Math.floor(this.continues / 2);
            if (totalPage <= this.continues) {
                (startNum = 1), (endNum = totalPage);
            } else {
                startNum = this.pageNo - eachSize;
                endNum = this.pageNo + eachSize;
                if (startNum < 1) {
                    startNum = 1;
                    endNum = this.continues;
                }

                if (end > totalPage) {
                    endNum = totalPage;
                    startNum = totalPage - this.continues + 1;
                }
            }
            return {startNum, endNum};
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;

    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>