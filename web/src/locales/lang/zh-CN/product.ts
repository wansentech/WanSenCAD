export default {
    selectData: '请选择一条数据',
    modifyDataPrompt: '抱歉，只有未审核的单据才能编辑！',
    selectProduct: '选择商品',
    inputSelectProduct: '请选择商品',
    productList: '商品列表',
    category:{
        title: '产品分类列表',
        tip: '产品分类列表可以添加多个产品分类和下级分类',
        add: '新增产品分类',
        batchDelete: '批量删除产品分类',
        table:{
            categoryName: '分类名称',
            categoryNumber: '分类编号',
            categoryParent: '上级分类',
            sort: '排序',
            remark: '备注',
            createTime: '创建时间',
            operate: '操作',
            edit: '编辑产品分类',
            delete: '删除产品分类'
        }
    },
    info:{
        title: '商品信息列表',
        add: '新增',
        batchDelete: '批量删除',
        batchEnable: '批量启用',
        batchDisable: '批量禁用',
        import: '导入',
        export: '导出',
        batchEdit: '批量编辑',
        addProductInfo: '新增商品信息',
        editProductInfo: '修改商品信息',
        header: {
            categoryName: '商品类别',
            keyWord: '关键词',
            serialNumber: '序列号',
            batchNumber: '批次号',
            warehouse: '仓库',
            have: '有',
            none: '无',
        },
        table: {
            barCode: '条码',
            productName: '商品名称',
            productStandard: '商品规格',
            productModel: '商品型号',
            productColor: '商品颜色',
            productUnit: '商品单位',
            productCategory: '商品类别',
            productStock: '商品库存',
            purchasePrice: '采购价格',
            retailPrice: '零售价格',
            salesPrice: '销售价格',
            lowestSellPrice: '最低销售价格',
            status: '状态',
            createTime: '创建时间',
            operate: '操作',
        },
        importInfo: {
            title: '商品信息数据导入',
            templateName: '商品信息Excel模板[下载]',
            infoData: '商品信息数据',
            setup1: '第一步：',
            setup2: '第二步：',
            tip: '提示：模板中的第一行请勿删除',
        },
        form: {
            basic: {
                title: '基本信息',
                name: '名称',
                inputName: '请输入名称',
                standard: '规格',
                inputStandard: '请输入规格',
                model: '型号',
                inputModel: '请输入型号',
                color: '颜色',
                inputColor: '请输入颜色',
                unit: '单位',
                inputUnit: '请输入单位',
                inputManyUnit: '请选择多单位',
                unitTip: '需要先录入单位才能激活此处输入框',
                weight: '基础重量',
                inputWeight: '请输入基础重量（Kg）',
                sheIfLife: '保质期',
                inputSheIfLife: '请输入保质期（天）',
                category: '类别',
                inputCategory: '请选择类别',
                serialNumber: '序列号',
                inputSerialNumber: '请选择有无序列号',
                serialNumberTip: '如果选择为有，则在采购入库单需要录入该商品的序列号',
                batchNumber: '批次号',
                inputBatchNumber: '请选择有无批次号',
                batchNumberTip: '如果选择为有，则在采购入库单需要录入该商品的批号和有效期',
                warehouseShelves: '仓库货架',
                inputWarehouseShelves: '请输入仓库货架',
                multipleAttributes: '多属性',
                multipleAttributesTip: '多属性针对服装、鞋帽等行业，需要先录入单位才能激活此处输入框',
                inputMultipleAttributes: '请选择多属性（可多选）',
                insertRow: '插入一行',
                deleteRow: '删除选中行',
                purchasePriceBatch: '采购价-批量',
                retailPriceBatch: '零售价-批量',
                salesPriceBatch: '销售价-批量',
                lowestSellPriceBatch: '最低销售价-批量',
                table: {
                    pleaseEnter: '请输入 ',
                    barCode: '条码',
                    unit: '单位',
                    multipleAttributes: '多属性',
                    retailPrice: '零售价格',
                    purchasePrice: '采购价格',
                    salesPrice: '销售价格',
                    lowestSellPrice: '最低销售价格',
                },
                remark: '备注',
                inputRemark: '请输入备注',
                noticeOne: '请插入一行数据，录入商品条码价格信息',
                noticeTwo: '系统检查到您没有仓库信息，请在基本资料菜单栏->添加至少1条仓库信息',
                noticeThree: '抱歉，您还没有选择多属性，开启多属性后才能批量设置金额',
                noticeFour: '请先录入条码、单位等信息！',
                inputPrice: '请输入价格',
                price: '价格',
                batchSet: '批量设置',
            },
            extendInfo: {
                title: '扩展信息',
                manufacturer: '制造商',
                customOne: '自定义1',
                customTwo: '自定义2',
                customThree: '自定义3',
            },
            inventoryQuantity: {
                title: '库存数量',
                initialQuantity: '期初库存数量',
                inputInitialQuantity: '请输入期初库存数量',
                batchInitialQuantity: '期初库存-批量设置',
                minSafetyQuantity: '最低安全库存数量',
                inputMinSafetyQuantity: '请输入最低安全库存数量',
                batchMinSafetyQuantity: '最低安全库存-批量设置',
                maxSafetyQuantity: '最高安全库存数量',
                inputMaxSafetyQuantity: '请输入最高安全库存数量',
                batchMaxSafetyQuantity: '最高安全库存-批量设置',
                warehouse: '仓库（商品条码/商品单位）',
                inputNumber: '请输入数量',
                number: '库存数量',
            },
            images: {
                title: '图片信息',
                upload: '上传图片',
                tip: '上传提示：最多上传4张图片，支持jpg、jpeg、png格式，最大支持2M',
            },
        }
    },
    attribute: {
        title: '商品多属性列表',
        add: '新增产品属性',
        batchDelete: '批量删除产品属性',
        addProductAttribute: '新增产品属性',
        editProductAttribute: '编辑产品属性',
        table: {
            attributeName: '属性名称',
            attributeValue: '属性值(用|隔开)',
            sort: '排序',
            remark: '属性备注',
            createTime: '创建时间',
            operate: '操作',
            edit: '编辑产品属性',
            delete: '删除产品属性'
        }
    },
    unit: {
        title: '商品计量单位列表',
        add: '新增商品单位',
        batchDelete: '批量删除商品单位',
        addProductUnit: '新增商品计量单位',
        editProductUnit: '编辑商品计量单位',
        table: {
            unitName: '计量单位',
            basicUnit: '基本单位',
            inputBasicUnit: '请输入基本单位(小单位)',
            deputyUnitOne: '副单位1',
            inputDeputyUnitOne: '请输入副单位(大单位)',
            inputProportionOne: '请输入比例',
            deputyUnitTwo: '副单位2',
            inputDeputyUnitTwo: '请输入副单位2(大单位)',
            inputProportionTwo: '请输入比例2',
            deputyUnitThree: '副单位3',
            inputDeputyUnitThree: '请输入副单位3(大单位)',
            inputProportionThree: '请输入比例3',
            status: '状态',
            createTime: '创建时间',
            operate: '操作',
            edit: '编辑商品单位',
            delete: '删除商品单位'
        },
        noticeOne: '抱歉，副单位的比例不能为空值',
    }
};